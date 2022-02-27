import React from 'react'

import { HashRouter, Route } from 'react-router-dom'

import MainPage from 'routes/MainPage'
import CrowdfundingPage from 'routes/CrowdfundingPage'

import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Route component={CrowdfundingPage} path='/' exact />
        <Route component={MainPage} path='/' exact />
      </HashRouter>
    </div>
  )
}
