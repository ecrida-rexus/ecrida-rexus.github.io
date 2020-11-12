import React from 'react'

import { Element } from 'react-scroll'

import Header from 'components/Header'
import Introduction from 'components/Introduction'
import RexusBexusBanner from 'components/RexusBexusBanner'
import Section from 'components/Section'
import Team from 'components/Team'
import Partners from 'components/Partners'
import Experiment from 'components/Experiment'
import Footer from 'components/Footer'
import Timeline from 'components/Timeline'

export default function MainPage() {
  return (
    <>
      <Header isMainPage />
      <Element name='introduction'>
        <Introduction />
      </Element>
      <RexusBexusBanner />
      <Element name='team'>
        <Section headline='Meet our team'>
          <Team />
        </Section>
      </Element>
      <Element name='experiment'>
        <Section>
          <Experiment />
        </Section>
      </Element>
      <Element name=''>
        <Section headline='Latest Facebook activity'>
          <Timeline />
        </Section>
      </Element>
      <Element name='partners'>
        <Section headline='Sponsors and Partners'>
          <Partners />
        </Section>
      </Element>
      <Footer />
    </>
  )
}