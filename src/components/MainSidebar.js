import React from 'react'
import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Terminal from 'grommet/components/icons/base/Terminal'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Heading from 'grommet/components/Heading'

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
        <Header justify="between" size="large" pad={{ horizontal: 'medium' }}>
          <Title>
            <Anchor
              icon={<Terminal type="logo" size="large" />}
              align="end"
              href="/"
            />
          </Title>
        </Header>
        <Menu align="start" justify="between" size="small" primary={true}>
          <Box pad="medium" size="medium">
            <Heading tag="h3" margin="none">
              Bitburner
            </Heading>
            <Heading tag="h3" strong>
              Community
            </Heading>
          </Box>
        </Menu>
        <Menu align="start" size="small" primary={true}>
          <Header align="end" pad={{ horizontal: "medium" }}>
            <Box>
              <Heading tag="h4" strong>Scripts</Heading>
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