import { Center, Flex } from '@chakra-ui/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { PetDetailCell } from '../cells/PetDetail'

function PetPage() {
  const { query } = useRouter()
  const petId = query[':petId'] as string

  return (
    <>
      <Head>
        <title>PetPage</title>
      </Head>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Center>{petId && <PetDetailCell pet={petId} />}</Center>
      </Flex>
    </>
  )
}

export default PetPage
