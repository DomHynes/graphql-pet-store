import {
  Alert,
  AlertIcon,
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/core'
import gql from 'graphql-tag'
import NextLink from 'next/link'
import React from 'react'

import { useAuth } from '../context/auth'
import { GetPetsQuery, useAdoptPetMutation, useGetPetsQuery } from '../types'

gql`
  query getPets {
    pets(orderBy: { createdAt: asc }) {
      id
      name
      createdAt
      updatedAt
      adoption {
        adopter {
          id
        }
      }
    }
  }

  mutation adoptPet($pet: PetWhereUniqueInput!) {
    adoptPet(pet: $pet) {
      id
      adoptee {
        id
      }
      adopter {
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
                isDisabled={user.id === pet.adoption?.adopter.id}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  adopt({ variables: { pet: { id: pet.id } } })

                  return false
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
  console.warn({ error })
  if (loading) return <Loading />
  if (error) return <Error />
  if (data.pets) return <Success {...data} />

  return <Empty />
}
