import { schema } from 'nexus'
import { Role } from '@prisma/client'
import { UserInputError, ForbiddenError } from 'apollo-server-express'

import { hashPassword, appJwtForUser, comparePasswords } from '../services/auth'
import { isAdmin, canAccess } from '../services/permissions'

// User Type
schema.objectType({
  name: 'User',
  description: 'A User',
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.role()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.profile()
    t.model.adoptions()

    // Show email as null for unauthorized users
    t.string('email', {
      nullable: true,
      resolve: (profile, _args, ctx) => (canAccess(profile, ctx) ? profile.email : null),
    })
  },
})

// Auth Payload Type
schema.objectType({
  name: 'AuthPayload',
  description: 'Payload returned if login or signup is successful',
  definition(t) {
    t.field('user', { type: 'User', description: 'The logged in user' })
    t.string('token', {
      description: 'The current JWT token. Use in Authentication header',
    })
  },
})

// Queries
schema.queryType({
  definition: (t) => {
    // Me Query
    t.field('me', {
      type: 'User',
      description: 'Returns the currently logged in user',
      nullable: true,
      resolve: (_root, _args, ctx) => ctx.user,
    })

    // List Users Query (admin only)
    t.crud.users({
      filtering: true,
      ordering: true,
      resolve: async (root, args, ctx, info, originalResolve) => {
        // if (!isAdmin(ctx.user)) throw new ForbiddenError('Unauthorized');

        return await originalResolve(root, args, ctx, info)
      },
    })
  },
})

// Mutations
schema.mutationType({
  definition: (t) => {
    // Login Mutation
    t.field('login', {
      type: 'AuthPayload',
      description: 'Login to an existing account',
      args: {
        email: schema.stringArg({ required: true }),
        password: schema.stringArg({ required: true }),
      },
      resolve: async (_root, args, ctx) => {
        const { email, password } = args
        const user = await ctx.db.user.findOne({ where: { email } })

        if (!user) {
          throw new UserInputError(`No user found for email: ${email}`, {
            invalidArgs: { email: 'is invalid' },
          })
        }

        const valid = comparePasswords(password, user.password)

        if (!valid) {
          throw new UserInputError('Invalid password', {
            invalidArgs: { password: 'is invalid' },
          })
        }

        const token = appJwtForUser(user)

        return {
          token,
          user,
        }
      },
    })

    // User Create (admin only)
    t.crud.createOneUser({
      alias: 'createUser',
      resolve: async (root, args, ctx, info, originalResolve) => {
        if (!isAdmin(ctx.user)) {
          throw new ForbiddenError('Not authorized')
        }

        const user = await ctx.db.user.findOne({ where: { email: args.data.email } })

        if (user) {
          throw new UserInputError('Email already exists.', {
            invalidArgs: { email: 'already exists' },
          })
        }

        // force role to user and hash the password
        const updatedArgs = {
          data: {
            ...args.data,
            password: hashPassword(args.data.password),
          },
        }

        return originalResolve(root, updatedArgs, ctx, info)
      },
    })

    t.field('signup', {
      type: 'AuthPayload',
      description: 'Signup for an account',
      args: {
        data: schema.arg({ type: 'SignupInput', required: true }),
      },
      resolve: async (_root, args, ctx) => {
        const existingUser = await ctx.db.user.findOne({ where: { email: args.data.email } })

        if (existingUser) {
          throw new UserInputError('Email already exists.', {
            invalidArgs: { email: 'already exists' },
          })
        }

        // force role to user and hash the password
        const updatedArgs = {
          data: {
            ...args.data,
            role: Role.USER,
            password: hashPassword(args.data.password),
          },
        }

        const user = await ctx.db.user.create(updatedArgs)
        const token = appJwtForUser(user)

        return {
          user,
          token,
        }
      },
    })
  },
})

schema.inputObjectType({
  name: 'SignupInput',
  definition: (t) => {
    t.string('email', { required: true })
    t.string('password', { required: true })
    t.field('profile', { type: 'ProfileCreateOneWithoutUserInput' })
  },
})
