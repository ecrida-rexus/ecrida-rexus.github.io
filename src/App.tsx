import React from 'react'

import { HashRouter, Route } from 'react-router-dom'

import MainPage from 'routes/MainPage'

import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Route component={MainPage} path='/' exact />
      </HashRouter>
    </div>
  )
}
