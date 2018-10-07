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

const MainContent = () => {
  return (
    <Article primary>
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
      <Section pad={{ horizontal: 'large' }}>
        <Heading pad={{ vertical: 'small' }} tag="h2" id="overview">
          Overview
        </Heading>
        <Box>
          <Paragraph>
            For inspiration, assistance, and discussion around the amazing
            cyperpunk-themed incremental RPG, Bitburner.
          </Paragraph>
        </Box>
      </Section>
    </Article>
  )
}

export default MainContent
