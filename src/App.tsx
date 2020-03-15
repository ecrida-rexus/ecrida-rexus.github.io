import React from 'react'

import Header from './components/Header'
import Introduction from './components/Introduction'
import Section from './components/Section'

import './App.scss'
import Team from './components/Team'
import Partners from './components/Partners'
import Timeline from './components/Timeline'
import Experiment from './components/Experiment'
import Footer from './components/Footer'

import { Element } from 'react-scroll'

export interface IAppState {
  isModalOpen: boolean
}

export default class App extends React.Component {
  state: IAppState = {
    isModalOpen: false
  }

  onExpand = () => {
    this.setState({ isModalOpen: true })
    document.body.style.overflow = 'hidden'
  }

  onCollapse = () => {
    this.setState({ isModalOpen: false })
    document.body.style.overflow = 'unset'
  }

  public render() {
    return (
      <div className='App'>
        <Header />
        <Element name='introduction'>
          <Introduction />
        </Element>
        <Element name='team'>
          <Section headline='Meet our team'>
            <Team />
          </Section>
        </Element>
        <Element name='experiment'>
          <Section headline='Experiment'>
            <Experiment />
          </Section>
        </Element>
        <Element name='timeline'>
          <Section headline='Timeline'>
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
}
