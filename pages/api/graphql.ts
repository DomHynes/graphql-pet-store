if (process.env.NODE_ENV === 'development') require('nexus').default.reset()

const app = require('nexus').default

// eslint-disable-next-line @typescript-eslint/no-var-requires
const hashes = require('../../persisted-query-ids/server.json')

require('../../graphql/schema')

app.assemble()

async function handler(req, res) {
  if (req.body && req.body.extensions && req.body.extensions.persistedQuery) {
    req.body.query = hashes[req.body.extensions.persistedQuery.sha256Hash]
  } else if (process.env['NODE_ENV'] !== 'development') {
    return res.status(400).json({ message: 'unknown query' })
  }

  return app.server.handlers.graphql(req, res)
}

export default handler
