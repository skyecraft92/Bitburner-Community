import React from 'react'
import Tile from 'grommet/components/Tile'
import Card from 'grommet/components/Card'
import Tilt from 'react-tilt'

const CardItem = props => {
  return (
    <Tilt
      className="Tilt"
      options={{ max: 15, perspective: 2000, scale: 1.05 }}
    >
      <div className="Tilt-inner">
        <Tile pad="large">
          <Tile pad="medium">
            <Card
              thumbnail="https://grommet.io//img/carousel-1.png"
              label="Sample Label"
              heading="Sample Heading"
              description="Sample description providing more details."
              colorIndex="brand"
            />
          </Tile>
        </Tile>
      </div>
    </Tilt>
  )
}

export default CardItem
