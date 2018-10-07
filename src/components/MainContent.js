import React from 'react'
import Article from 'grommet/components/Article'
import Hero from 'grommet/components/Hero'
import Image from 'grommet/components/Image'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import Section from 'grommet/components/Section'
import Paragraph from 'grommet/components/Paragraph'
import Notification from 'grommet/components/Notification'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Card from 'grommet/components/Card'
import MainHero from '../components/MainHero'
import Overview from '../sections/Overview'
import Scripts from '../sections/Scripts'

const MainContent = () => {
  return (
    <Article primary>
      <MainHero />
      <Overview />
      <Scripts />
    </Article>
  )
}

export default MainContent
