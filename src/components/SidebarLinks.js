import React from 'react'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Gamepad from 'grommet/components/icons/base/Gamepad'
import Book from 'grommet/components/icons/base/Book'
import SocialReddit from 'grommet/components/icons/base/SocialReddit'
import SocialGithub from 'grommet/components/icons/base/SocialGithub'

const SidebarLinks = () => {
  return (
    <Box margin={{ top: 'small' }} size="small" direction="row">
      <Anchor
        a11yTitle="Play Bitburner"
        icon={<Gamepad />}
        href="https://danielyxie.github.io/bitburner/"
        target="_blank"
      />
      <Anchor
        a11yTitle="Documentation"
        icon={<Book />}
        href="https://bitburner.readthedocs.io/en/latest/"
        target="_blank"
      />
      <Anchor
        a11yTitle="Bitburner Subreddit"
        icon={<SocialReddit />}
        href="https://www.reddit.com/r/Bitburner/"
        target="_blank"
      />
      <Anchor
        a11yTitle="Bitburner GitHub"
        icon={<SocialGithub />}
        href="https://github.com/alexlee-dev/Bitburner-Community"
        target="_blank"
      />
    </Box>
  )
}

export default SidebarLinks
