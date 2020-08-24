import React from 'react'
import { Stack, useBreakpoint, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/core'

import Link from './Link'

export function Nav() {
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === 'base'

  return isMobile ? (
    <Menu>
      <MenuButton variant="outline" colorScheme="lightPurple" ml="auto">
        =
      </MenuButton>

      <MenuList width="full">
        <MenuItem flexDirection="column">
          <Link next={{ href: '/profile' }}>Profile</Link>
        </MenuItem>

        <MenuItem flexDirection="column">
          <Link next={{ href: '/pets' }}>Pets</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Stack as="nav" direction="row" ml="auto" alignItems="center" fontSize="md" spacing={8}>
      <Link next={{ href: '/profile' }} variant="outline">
        Profile
      </Link>
    </Stack>
  )
}
