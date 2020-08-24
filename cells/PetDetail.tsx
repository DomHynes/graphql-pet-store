import React from 'react'
import gql from 'graphql-tag'
import { Spinner, Text, Stack, Heading } from '@chakra-ui/core'

import { usePetDetailQuery, PetDetailQuery } from '../types'

export const QUERY = gql`
  query PetDetail($id: String!) {
    pets(where: { id: { equals: $id } }) {
      id
      createdAt
      name
      user {
        id
        email
      }
    }
  }
`

export const Loading = () => <Spinner />
export const Error = () => <Text>Error. See dev tools.</Text>
export const Empty = () => <Text>No data.</Text>

export const Success = ({ pets }: PetDetailQuery) => {
  return (
    <Stack spacing={2}>
      <Heading>{pets[0].name || 'Unnamed'}</Heading>
      <Text>{pets[0].user?.email}</Text>
    </Stack>
  )
}

export const PetDetailCell = ({ pet }: { pet: string }) => {
  const { data, loading, error } = usePetDetailQuery({ variables: { id: pet } })

  if (loading) return <Loading />
  if (error) return <Error />
  if (data.pets) return <Success {...data} />

  return <Empty />
}
