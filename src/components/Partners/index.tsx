import React from 'react'

import DLR from './assets/DLR.png'
import SNSA from './assets/SNSA.png'
import ESA from './assets/ESA.png'
import ROSA from './assets/ROSA.gif'
import Thales from './assets/Thales.png'
import GMV from './assets/GMV.svg'
import UPB from './assets/UPB.png'
import ACS from './assets/ACS.png'
import FIA from './assets/FIA.png'
import FIMM from './assets/FIMM.png'

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
          <a href='http://www.rosa.ro/index.php/en/' target=' _blank' rel='noopener noreferrer'>
            <img src={ROSA} className='Logo' alt='ROSA'></img>
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
        <div className='Row'>
          <a href='https://upb.ro/en/' target=' _blank' rel='noopener noreferrer'>
            <img src={UPB} className='Logo' alt='UPB'></img>
          </a>
          <a href='https://acs.pub.ro/en/' target=' _blank' rel='noopener noreferrer'>
            <img src={ACS} className='Logo' alt='ACS'></img>
          </a>
          <a href='http://www.aero.pub.ro/wordpress/index.php/en/home/' target=' _blank' rel='noopener noreferrer'>
            <img src={FIA} className='Logo' alt='FIA'></img>
          </a>
          <a href='http://www.mecanica.pub.ro/new/' target=' _blank' rel='noopener noreferrer'>
            <img src={FIMM} className='Logo' alt='UPB'></img>
          </a>
        </div>
      </div >
    )
  }
}
