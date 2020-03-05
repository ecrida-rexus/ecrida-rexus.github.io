import React from 'react'

import DLR from './assets/DLR.png'
import SNSA from './assets/SNSA.png'
import ESA from './assets/ESA.png'
import Thales from './assets/Thales.png'
import GMV from './assets/GMV.svg'

import './index.scss'

export default class Partners extends React.Component {
  public render() {
    return (
      <div className='Partners'>
        <div className='Row'>
          <a href='https://www.dlr.de/EN/Home/home_node.html' target='_blank' rel='noopener noreferrer'>
            <img src={DLR} className='Logo' alt='DLR'></img>
          </a>
          <a href='https://www.rymdstyrelsen.se/en/' target='_blank' rel='noopener noreferrer'>
            <img src={SNSA} className='Logo' alt='SNSA'></img>
          </a>
          <a href='https://www.esa.int/' target='_blank' rel='noopener noreferrer'>
            <img src={ESA} className='Logo' alt='ESA'></img>
          </a>
        </div>
        <div className='Row'>
          <a href='https://www.thalesgroup.com/en' target='_blank' rel='noopener noreferrer'>
            <img src={Thales} className='Logo' alt='Thales'></img>
          </a>
          <a href='https://www.gmv.com/en/' target='_blank' rel='noopener noreferrer'>
            <img src={GMV} className='Logo' alt='GMV'></img>
          </a>
        </div>
      </div >
    )
  }
}
