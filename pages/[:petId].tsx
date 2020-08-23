import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Heading, Center, Flex } from '@chakra-ui/core';
import { PetDetailCell } from '../cells/PetDetail';

function PetPage() {
  const r = useRouter();
  const petId = r.query[':petId'] as string;
  return (
    <>
      <Head>
        <title>PetPage</title>
      </Head>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Center>{petId && <PetDetailCell pet={petId} />}</Center>
      </Flex>
    </>
  );
}

export default PetPage;
