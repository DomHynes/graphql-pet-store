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
    t.model.user()
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

    t.field('adoptPet', {
      type: 'Pet',
      args: { pet: schema.arg({ type: 'PetWhereUniqueInput', required: true }) },
      resolve: async (_root, args, ctx) =>
        ctx.db.pet.update({
          where: args.pet,
          include: { user: true },
          data: { user: { connect: { id: ctx.user.id } } },
        }),
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
