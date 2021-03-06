import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Adoption = {
  __typename?: 'Adoption';
  adoptee: Pet;
  adopter: User;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AdoptionCreateManyWithoutAdopterInput = {
  connect?: Maybe<Array<AdoptionWhereUniqueInput>>;
  create?: Maybe<Array<AdoptionCreateWithoutAdopterInput>>;
};

export type AdoptionCreateWithoutAdopterInput = {
  adoptee: PetCreateOneWithoutAdoptionInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdoptionListRelationFilter = {
  every?: Maybe<AdoptionWhereInput>;
  none?: Maybe<AdoptionWhereInput>;
  some?: Maybe<AdoptionWhereInput>;
};

export type AdoptionWhereInput = {
  adoptee?: Maybe<PetWhereInput>;
  adopter?: Maybe<UserWhereInput>;
  AND?: Maybe<Array<AdoptionWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AdoptionWhereInput>>;
  OR?: Maybe<Array<AdoptionWhereInput>>;
  petId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type AdoptionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

/** Payload returned if login or signup is successful */
export type AuthPayload = {
  __typename?: 'AuthPayload';
  /** The current JWT token. Use in Authentication header */
  token?: Maybe<Scalars['String']>;
  /** The logged in user */
  user?: Maybe<User>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};


export type Mutation = {
  __typename?: 'Mutation';
  adoptPet?: Maybe<Adoption>;
  createPet?: Maybe<Pet>;
  createUser: User;
  /** Login to an existing account */
  login?: Maybe<AuthPayload>;
  /** Signup for an account */
  signup?: Maybe<AuthPayload>;
};


export type MutationAdoptPetArgs = {
  pet: PetWhereUniqueInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

/** A Pet */
export type Pet = {
  __typename?: 'Pet';
  adoption?: Maybe<Adoption>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type PetCreateOneWithoutAdoptionInput = {
  connect?: Maybe<PetWhereUniqueInput>;
  create?: Maybe<PetCreateWithoutAdoptionInput>;
};

export type PetCreateWithoutAdoptionInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PetOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type PetWhereInput = {
  adoption?: Maybe<AdoptionWhereInput>;
  AND?: Maybe<Array<PetWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<PetWhereInput>>;
  OR?: Maybe<Array<PetWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PetWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

/** A User Profile */
export type Profile = {
  __typename?: 'Profile';
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  /** The first and last name of a user */
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type ProfileCreateOneWithoutUserInput = {
  connect?: Maybe<ProfileWhereUniqueInput>;
  create?: Maybe<ProfileCreateWithoutUserInput>;
};

export type ProfileCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProfileWhereInput = {
  AND?: Maybe<Array<ProfileWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ProfileWhereInput>>;
  OR?: Maybe<Array<ProfileWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns the currently logged in user */
  me?: Maybe<User>;
  pets: Array<Pet>;
  users: Array<User>;
};


export type QueryPetsArgs = {
  after?: Maybe<PetWhereUniqueInput>;
  before?: Maybe<PetWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PetOrderByInput>>;
  where?: Maybe<PetWhereInput>;
};


export type QueryUsersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  where?: Maybe<UserWhereInput>;
};

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
};

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

/** A User */
export type User = {
  __typename?: 'User';
  adoptions: Array<Adoption>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  profile?: Maybe<Profile>;
  role: Role;
  updatedAt: Scalars['DateTime'];
};


/** A User */
export type UserAdoptionsArgs = {
  after?: Maybe<AdoptionWhereUniqueInput>;
  before?: Maybe<AdoptionWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  adoptions?: Maybe<AdoptionCreateManyWithoutAdopterInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserWhereInput = {
  adoptions?: Maybe<AdoptionListRelationFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  password?: Maybe<StringFilter>;
  profile?: Maybe<ProfileWhereInput>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type PetDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PetDetailQuery = (
  { __typename?: 'Query' }
  & { pets: Array<(
    { __typename?: 'Pet' }
    & Pick<Pet, 'id' | 'createdAt' | 'name'>
    & { adoption?: Maybe<(
      { __typename?: 'Adoption' }
      & Pick<Adoption, 'id'>
      & { adopter: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
        & { profile?: Maybe<(
          { __typename?: 'Profile' }
          & Pick<Profile, 'fullName'>
        )> }
      ) }
    )> }
  )> }
);

export type GetPetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPetsQuery = (
  { __typename?: 'Query' }
  & { pets: Array<(
    { __typename?: 'Pet' }
    & Pick<Pet, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { adoption?: Maybe<(
      { __typename?: 'Adoption' }
      & { adopter: (
        { __typename?: 'User' }
        & Pick<User, 'id'>
      ) }
    )> }
  )> }
);

export type AdoptPetMutationVariables = Exact<{
  pet: PetWhereUniqueInput;
}>;


export type AdoptPetMutation = (
  { __typename?: 'Mutation' }
  & { adoptPet?: Maybe<(
    { __typename?: 'Adoption' }
    & Pick<Adoption, 'id'>
    & { adoptee: (
      { __typename?: 'Pet' }
      & Pick<Pet, 'id'>
    ), adopter: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  )> }
);

export type SignupMutationVariables = Exact<{
  data: SignupInput;
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);


export const PetDetailDocument = gql`
    query PetDetail($id: String!) {
  pets(where: {id: {equals: $id}}) {
    id
    createdAt
    name
    adoption {
      id
      adopter {
        id
        email
        profile {
          fullName
        }
      }
    }
  }
}
    `;

/**
 * __usePetDetailQuery__
 *
 * To run a query within a React component, call `usePetDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePetDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePetDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePetDetailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PetDetailQuery, PetDetailQueryVariables>) {
        return ApolloReactHooks.useQuery<PetDetailQuery, PetDetailQueryVariables>(PetDetailDocument, baseOptions);
      }
export function usePetDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PetDetailQuery, PetDetailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PetDetailQuery, PetDetailQueryVariables>(PetDetailDocument, baseOptions);
        }
export type PetDetailQueryHookResult = ReturnType<typeof usePetDetailQuery>;
export type PetDetailLazyQueryHookResult = ReturnType<typeof usePetDetailLazyQuery>;
export type PetDetailQueryResult = ApolloReactCommon.QueryResult<PetDetailQuery, PetDetailQueryVariables>;
export const GetPetsDocument = gql`
    query getPets {
  pets(orderBy: {createdAt: asc}) {
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
    `;

/**
 * __useGetPetsQuery__
 *
 * To run a query within a React component, call `useGetPetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPetsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPetsQuery, GetPetsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPetsQuery, GetPetsQueryVariables>(GetPetsDocument, baseOptions);
      }
export function useGetPetsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPetsQuery, GetPetsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPetsQuery, GetPetsQueryVariables>(GetPetsDocument, baseOptions);
        }
export type GetPetsQueryHookResult = ReturnType<typeof useGetPetsQuery>;
export type GetPetsLazyQueryHookResult = ReturnType<typeof useGetPetsLazyQuery>;
export type GetPetsQueryResult = ApolloReactCommon.QueryResult<GetPetsQuery, GetPetsQueryVariables>;
export const AdoptPetDocument = gql`
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
    `;
export type AdoptPetMutationFn = ApolloReactCommon.MutationFunction<AdoptPetMutation, AdoptPetMutationVariables>;

/**
 * __useAdoptPetMutation__
 *
 * To run a mutation, you first call `useAdoptPetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdoptPetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adoptPetMutation, { data, loading, error }] = useAdoptPetMutation({
 *   variables: {
 *      pet: // value for 'pet'
 *   },
 * });
 */
export function useAdoptPetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AdoptPetMutation, AdoptPetMutationVariables>) {
        return ApolloReactHooks.useMutation<AdoptPetMutation, AdoptPetMutationVariables>(AdoptPetDocument, baseOptions);
      }
export type AdoptPetMutationHookResult = ReturnType<typeof useAdoptPetMutation>;
export type AdoptPetMutationResult = ApolloReactCommon.MutationResult<AdoptPetMutation>;
export type AdoptPetMutationOptions = ApolloReactCommon.BaseMutationOptions<AdoptPetMutation, AdoptPetMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($data: SignupInput!) {
  signup(data: $data) {
    token
    user {
      id
    }
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;