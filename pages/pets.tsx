import React from 'react';
import Head from 'next/head';
import { Heading, Center, Flex, Box, Container, Stack } from '@chakra-ui/core';

import { TestCell } from '../cells/Test';

function TestPage() {
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
  );
}

export default TestPage;
