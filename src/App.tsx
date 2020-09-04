import React from 'react'

import { Element } from 'react-scroll'

import Header from './components/Header'
import Introduction from './components/Introduction'
import RexusBexusBanner from './components/RexusBexusBanner'
import Section from './components/Section'
import Team from './components/Team'
import Partners from './components/Partners'
import Timeline from './components/Timeline'
import Experiment from './components/Experiment'
import Footer from './components/Footer'

import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <Header />
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
        <Section headline=''>
          <Experiment />
        </Section>
      </Element>
      <Element name='activity'>
        <Section>
          <Timeline />
        </Section>
      </Element>
      <Element name='partners'>
        <Section headline='Sponsors and Partners'>
          <Partners />
        </Section>
      </Element>
      <Footer />
    </div >
  )
}
