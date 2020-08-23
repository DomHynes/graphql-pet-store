import { User } from '@prisma/client';
import { schema } from 'nexus';
import { AuthenticationError, UserInputError /*ForbiddenError*/ } from 'apollo-server-errors';

// import { isAdmin } from '../services/permissions';

// Pet Type
schema.objectType({
  name: 'Pet',
  description: 'A Pet',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.name();
    t.model.User();
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createPet', {
      type: 'Pet',
      resolve: (_root, args, ctx) => {
        return ctx.db.pet.create({ data: {} });
      },
    });

    t.field('adoptPet', {
      type: 'Pet',
      args: { pet: schema.arg({ type: 'PetWhereUniqueInput', required: true }) },
      resolve: async (_root, args, ctx) =>
        ctx.db.pet.update({
          where: args.pet,
          include: { User: true },
          data: { User: { connect: { id: ctx.user.id } } },
        }),
    });
  },
});

schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.crud.pets({
      filtering: true,
      ordering: true,
    });
  },
});
