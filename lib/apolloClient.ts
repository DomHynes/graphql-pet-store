/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-restricted-globals */
import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createPersistedQueryLink } from '@apollo/link-persisted-queries'
import fetch from 'cross-fetch'
import { usePregeneratedHashes } from 'graphql-codegen-persisted-query-ids/lib/apollo'

import { LOGIN_TOKEN_KEY } from '../constants'
import hashes from '../persisted-query-ids/client.json'

import { cookies } from './cookies'

export function createApolloClient(ctx?: Record<string, any>) {
  // Apollo needs an absolute URL when in SSR, so determine host
  let host, protocol
  let hostUrl = process.env.API_URL

  if (ctx) {
    host = ctx?.req.headers['x-forwarded-host']
    protocol = ctx?.req.headers['x-forwarded-proto'] || 'http'
    hostUrl = `${protocol}://${host}`
  } else if (typeof location !== 'undefined') {
    host = location.host
    protocol = location.protocol
    hostUrl = `${protocol}//${host}`
  }

  const uri = `${hostUrl}/api/graphql`

  const httpLink = createHttpLink({
    uri,
    fetch,
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = cookies().get(LOGIN_TOKEN_KEY)
    // const token = localStorage.getItem(LOGIN_TOKEN_KEY);
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const client = new ApolloClient({
    link: from([
      createPersistedQueryLink({ generateHash: usePregeneratedHashes(hashes) }),
      authLink,
      httpLink,
    ]),
    cache: new InMemoryCache(),
  })

  return client
}
