import React from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

const Overview = () => {
  return (
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
  )
}

export default Overview
