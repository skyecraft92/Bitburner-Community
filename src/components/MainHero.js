import React from 'react'
import Hero from 'grommet/components/Hero'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

const MainHero = () => {
  return (
    <div>
      <Hero
        size="medium"
        background={
          <Image
            full
            src="https://res.cloudinary.com/alexlee-dev/image/upload/v1538871337/bitburner-community/programming.svg"
          />
        }
      />
      <Box pad="large">
        <Heading>Bitburner Community</Heading>
      </Box>
    </div>
  )
}

export default MainHero
