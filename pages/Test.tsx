import React from 'react';
import Head from 'next/head';
import { Heading, Center, Flex } from '@chakra-ui/core';

function TestPage() {
  return (
    <>
      <Head>
        <title>TestPage</title>
      </Head>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Center>
          <Heading size="lg">I am Test page</Heading>
        </Center>
      </Flex>
    </>
  );
}

export default TestPage;
