import React from 'react'
import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Heading from 'grommet/components/Heading'
import Logo from '../components/Logo'
import TitleMenu from '../components/TitleMenu'

const MainSidebar = () => {
  return (
    <Sidebar
      separator="right"
      full={true}
      direction="column"
      colorIndex="brand"
      size="small"
    >
      <Box>
        <Logo />
        <TitleMenu />
        <Menu align="start" size="small" primary={true}>
          <Anchor label="Overview" href="#overview" />
        </Menu>
        <Menu align="start" size="small" primary={true}>
          <Header align="end" pad={{ horizontal: 'medium' }}>
            <Box>
              <Heading tag="h4" strong>
                Scripts
              </Heading>
            </Box>
          </Header>
          <Anchor label="Script 1" />
          <Anchor label="Script 2" />
          <Anchor label="Script 3" />
        </Menu>
      </Box>
    </Sidebar>
  )
}

export default MainSidebar
