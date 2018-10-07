import React from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Tiles from 'grommet/components/Tiles'
import CardItem from '../components/CardItem'

const Scripts = () => {
  return (
    <Section pad={{ horizontal: 'large' }}>
      <Heading pad={{ vertical: 'small' }} tag="h2" id="scripts">
        Scripts
      </Heading>
      <Tiles fill flush={false} size="small">
        <CardItem />
        <CardItem tilty />
      </Tiles>
    </Section>
  )
}

export default Scripts
