import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/core'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React, { FC } from 'react'

type LinkProps = {
  next?: NextLinkProps
  chakra?: ChakraLinkProps
}

const Link: FC<LinkProps> = ({ next, chakra, children }) => {
  return (
    <NextLink passHref {...next}>
      <ChakraLink {...chakra}>{children}</ChakraLink>
    </NextLink>
  )
}

export default Link
