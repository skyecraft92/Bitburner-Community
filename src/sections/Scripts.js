import React from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Card from 'grommet/components/Card'

const Scripts = () => {
  return (
    <Section pad={{ horizontal: 'large' }}>
      <Heading pad={{ vertical: 'small' }} tag="h2" id="overview">
        Scripts
      </Heading>
      <Tiles fill flush={false} size="small">
        <Tile>
          <Card
            thumbnail="https://grommet.io//img/carousel-1.png"
            label="Sample Label"
            heading="Sample Heading"
            description="Sample description providing more details."
            colorIndex="brand"
          />
        </Tile>
        <Tile>
          <Card
            thumbnail="https://grommet.io//img/carousel-1.png"
            label="Sample Label"
            heading="Sample Heading"
            description="Sample description providing more details."
            colorIndex="brand"
          />
        </Tile>
        <Tile>
          <Card
            thumbnail="https://grommet.io//img/carousel-1.png"
            label="Sample Label"
            heading="Sample Heading"
            description="Sample description providing more details."
            colorIndex="brand"
          />
        </Tile>
        <Tile>
          <Card
            thumbnail="https://grommet.io//img/carousel-1.png"
            label="Sample Label"
            heading="Sample Heading"
            description="Sample description providing more details."
            colorIndex="brand"
          />
        </Tile>
      </Tiles>
    </Section>
  )
}

export default Scripts
