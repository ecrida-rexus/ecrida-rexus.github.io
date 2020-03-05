import React from 'react'

import Header from './components/Header'
import Introduction from './components/Introduction'
import Section from './components/Section'

import './App.scss'
import Team from './components/Team'

function App() {
  return (
    <div className='App'>
      <Header />
      <Introduction />
      <Section headline='Meet our team'>
        <Team />
      </Section>
    </div >
  )
}

export default App
