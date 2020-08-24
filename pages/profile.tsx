import React from 'react'
import Head from 'next/head'
import { Heading, Center, Flex } from '@chakra-ui/core'

function ProfilePage() {
  return (
    <>
      <Head>
        <title>ProfilePage</title>
      </Head>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Center>
          <Heading size="lg">I am profile page</Heading>
        </Center>
      </Flex>
    </>
  )
}

export default ProfilePage
