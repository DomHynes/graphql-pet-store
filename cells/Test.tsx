import React from 'react'
import gql from 'graphql-tag'
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
  Link,
} from '@chakra-ui/core'
import NextLink from 'next/link'

import { GetPetsQuery, Pet, useGetPetsQuery, useAdoptPetMutation } from '../types'
import { useAuth } from '../context/auth'

gql`
  query getPets {
    pets(orderBy: { createdAt: asc }) {
      id
      name
      createdAt
      updatedAt
      user {
        id
      }
    }
  }

  mutation adoptPet($pet: PetWhereUniqueInput!) {
    adoptPet(pet: $pet) {
      id
      user {
        id
      }
    }
  }
`

export const Loading = () => <Spinner />
export const Error = () => <Text>Error. See dev tools.</Text>
export const Empty = () => <Text>No data.</Text>

const PetCard = ({ pet }: { pet: GetPetsQuery['pets'][0] }) => {
  const { user } = useAuth()
  const [adopt, { called, loading, error }] = useAdoptPetMutation()

  return (
    <NextLink href={`/[:petId]`} as={`/${pet.id}`} passHref>
      <Link href="#" color="gray.900">
        <Stack spacing={2} border="1px" borderRadius="md" borderColor="gray.200">
          <AspectRatio width="auto" maxW={400} ratio={16 / 9} bgColor="gray.500">
            <Box />
          </AspectRatio>
          <Flex justifyContent="space-between" p={2}>
            <Heading size="xl">{pet.name ?? 'Unnamed'}</Heading>

            {user && (
              <Button
                isDisabled={user.id === pet.user?.id}
                onClick={(e) => {
                  e.stopPropagation()
                  adopt({ variables: { pet: { id: pet.id } } })
                }}
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
      </Link>
    </NextLink>
  )
}

export const Success = ({ pets }: GetPetsQuery) => {
  return (
    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={5}>
      {pets.map((p) => (
        <PetCard pet={p} />
      ))}
    </Grid>
  )
}

export const TestCell = () => {
  const { data, loading, error } = useGetPetsQuery()

  if (loading) return <Loading />
  if (error) return <Error />
  if (data.pets) return <Success {...data} />

  return <Empty />
}
