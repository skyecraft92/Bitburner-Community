import React from 'react'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import Cube from 'grommet/components/icons/base/Cube'
import SidebarLinks from './SidebarLinks'

const TitleMenu = () => {
  return (
    <Menu align="start" justify="between" size="small" primary={true}>
      <Box pad="medium" size="medium">
        <Heading tag="h3" margin="none">
          Bitburner
        </Heading>
        <Heading tag="h3" strong>
          Community
        </Heading>
        <Value value="0.40.4" icon={<Cube />} size="small" />
        <SidebarLinks />
      </Box>
    </Menu>
  )
}

export default TitleMenu
