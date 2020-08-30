import { schema } from 'nexus'

// import { isAdmin } from '../services/permissions';

// Pet Type
schema.objectType({
  name: 'Pet',
  description: 'A Pet',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.name()
    t.model.adoption()
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createPet', {
      type: 'Pet',
      resolve: (_root, args, ctx) => {
        return ctx.db.pet.create({ data: {} })
      },
    })
  },
})

schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.crud.pets({
      filtering: true,
      ordering: true,
      pagination: true,
    })
  },
})
