/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  //   const existing = await db.user.findMany({ where: { email: 'admin@email.com' }})
  //   if (!existing.length) {
  //     await db.user.create({ data: { name: 'Admin', email: 'admin@email.com' }})
  //   }
  const existing = await db.user.findMany({ where: { email: 'test@example.com' } })

  if (!existing.length) {
    await db.user.create({
      data: {
        email: 'test@example.com',
        password: bcrypt.hashSync('password1', 10),
        profile: { create: { firstName: 'Dom', lastName: 'Hynes' } },
      },
    })

    await db.pet.create({ data: {} })
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
