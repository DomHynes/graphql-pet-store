import Chance from 'chance'
import { User, Role } from '@prisma/client'

import { prisma } from '../helpers'
import { hashPassword } from '../../services/auth'

const chance = new Chance()

type UserAttrs = Partial<User>

export const UserFactory = {
  build: (attrs: UserAttrs = {}) => {
    return {
      id: chance.guid(),
      email: chance.email(),
      password: 'test1234',
      role: Role.USER,
      ...attrs,
    }
  },

  create: async (attrs: UserAttrs = {}) => {
    const user = UserFactory.build(attrs)

    return await prisma.user.create({
      data: { ...user, password: hashPassword(user.password) },
    })
  },
}
