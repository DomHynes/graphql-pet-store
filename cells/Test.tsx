import React from 'react';
import gql from 'graphql-tag';
import {
  Spinner,
  Text,
  Stack,
  Box,
  Heading,
  Button,
  AspectRatio,
  Flex,
  Grid,
  Alert,
  AlertIcon,
} from '@chakra-ui/core';

import { GetPetsQuery, Pet, useGetPetsQuery, useAdoptPetMutation } from '../types';
import { useAuth } from '../context/auth';

gql`
  query getPets {
    pets(orderBy: { createdAt: asc }) {
      id
      name
      createdAt
      updatedAt
      User {
        id
      }
    }
  }

  mutation adoptPet($pet: PetWhereUniqueInput!) {
    adoptPet(pet: $pet) {
      id
      User {
        id
      }
    }
  }
`;

export const Loading = () => <Spinner />;
export const Error = () => <Text>Error. See dev tools.</Text>;
export const Empty = () => <Text>No data.</Text>;

const PetCard = ({ pet }: { pet: GetPetsQuery['pets'][0] }) => {
  const { user } = useAuth();
  const [adopt, { called, loading, error }] = useAdoptPetMutation();

  return (
    <Stack spacing={2} border="1px" borderRadius="md" borderColor="gray.200">
      <AspectRatio width={400} ratio={16 / 9} bgColor="gray.500">
        <Box></Box>
      </AspectRatio>
      <Flex justifyContent="space-between">
        <Heading size="xl">{pet.name ?? 'Unnamed'}</Heading>
        {user && (
          <Button
            isDisabled={user.id == pet.User?.id}
            onClick={() => adopt({ variables: { pet: { id: pet.id } } })}
          >
            adopt
          </Button>
        )}
      </Flex>

      {called && !loading && !error && (
        <Alert status="success">
          <AlertIcon />
          Pet Adopted
        </Alert>
      )}
    </Stack>
  );
};

export const Success = ({ pets }: GetPetsQuery) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      {pets.map((p) => (
        <PetCard pet={p} />
      ))}
    </Grid>
  );
};

export const TestCell = () => {
  const { data, loading, error } = useGetPetsQuery();

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data.pets) return <Success {...data} />;

  return <Empty />;
};
