import React from 'react';
import gql from 'graphql-tag';
import { Spinner, Text } from '@chakra-ui/core';

import { useMyProfileQuery, MyProfileQuery } from '../types';

export const QUERY = gql`
  query myProfile {
    me {
      email
    }
  }
`;

export const Loading = () => <Spinner />;
export const Error = () => <Text>Error. See dev tools.</Text>;
export const Empty = () => <Text>No data.</Text>;

export const Success = ({ me }: MyProfileQuery) => {
  return <Text>Awesome! {me.email}</Text>;
};

export const TestCell = () => {
  const { data, loading, error } = useMyProfileQuery();

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data.me) return <Success {...data} />;

  return <Empty />;
};