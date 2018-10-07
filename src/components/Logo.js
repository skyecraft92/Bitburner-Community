import React from 'react';
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Anchor from 'grommet/components/Anchor'
import Terminal from 'grommet/components/icons/base/Terminal'

const Logo = () => {
  return (
    <Header justify="between" size="large" pad={{ horizontal: 'medium' }}>
      <Title>
        <Anchor
          icon={<Terminal type="logo" size="large" />}
          align="end"
          href="/"
        />
      </Title>
    </Header>
  )
}

export default Logo
