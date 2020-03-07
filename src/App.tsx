import React from 'react'
import Modal from 'react-modal'

import Header from './components/Header'
import Introduction from './components/Introduction'
import Section from './components/Section'

import './App.scss'
import Team from './components/Team'
import Partners from './components/Partners'
import Timeline from './components/Timeline'

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
        <Introduction />
        <Section headline='Meet our team'>
          <Team />
        </Section>
        <Section headline='Timeline' onExpand={this.onExpand}>
          <Timeline />
        </Section>
        <Section headline='Sponsors and Partners'>
          <Partners />
        </Section>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.onCollapse}
          className="Modal"
        >
          <Section headline='Timeline'>
            <Timeline />
          </Section>
        </Modal>
      </div >
    )
  }
}
