import { schema } from 'nexus'

schema.objectType({
  name: 'Adoption',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.adoptee()
    t.model.adopter()
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('adoptPet', {
      type: 'Adoption',
      args: { pet: schema.arg({ type: 'PetWhereUniqueInput', required: true }) },
      resolve: async (_root, args, ctx) =>
        ctx.db.adoption.create({
          data: {
            adopter: { connect: { id: ctx.user.id } },
            adoptee: { connect: { id: args.pet.id } },
          },
        }),
    })
  },
})
