import { Center, Container, Flex, Heading, Stack } from '@chakra-ui/core'
import Head from 'next/head'
import React from 'react'

import { TestCell } from '../cells/Test'

function PetsPage() {
  return (
    <>
      <Head>
        <title>TestPage</title>
      </Head>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Container>
          <Stack spacing={3}>
            <Heading size="lg">I am Test page</Heading>
            <Center flexDirection="column">
              <TestCell />
            </Center>
          </Stack>
        </Container>
      </Flex>
    </>
  )
}

export default PetsPage
