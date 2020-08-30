module.exports = {
  client: {
    includes: ['./cells/*.tsx', './components/*.tsx'],
    service: {
      localSchemaFile: './api.graphql',
    },
  },
}
