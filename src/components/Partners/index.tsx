import React from 'react'

import DLR from './assets/DLR.png'
import SNSA from './assets/SNSA.png'
import ESA from './assets/ESA.png'
import GMV from './assets/GMV.svg'
import ISS from './assets/ISS.png'
import RISE from './assets/RISE.png'
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
          <a href='https://www.rymdstyrelsen.se/en/' target='_blank' rel='noopener noreferrer'>
            <img src={SNSA} className='Logo' alt=''></img>
          </a>
          <a href='https://www.dlr.de/EN/Home/home_node.html' target='_blank' rel='noopener noreferrer'>
            <img src={DLR} className='Logo' alt=''></img>
          </a>
          <a href='https://www.esa.int/' target='_blank' rel='noopener noreferrer'>
            <img src={ESA} className='Logo' alt=''></img>
          </a>
        </div>
        <div className='Row'>
          <a href='https://www.gmv.com/en/' target='_blank' rel='noopener noreferrer'>
            <img src={GMV} className='Logo' alt=''></img>
          </a>
          <a href='https://roinspace.com/' target='_blank' rel='noopener noreferrer'>
            <img src={RISE} className='Logo' alt=''></img>
          </a>
          <a href='https://www2.spacescience.ro/?lang=en' target='_blank' rel='noopener noreferrer'>
            <img src={ISS} className='Logo' alt=''></img>
          </a>
        </div>
        <div className='Row'>
          <a href='https://upb.ro/en/' target=' _blank' rel='noopener noreferrer nofollow'>
            <img src={UPB} className='Logo' alt=''></img>
          </a>
          <a href='https://acs.pub.ro/en/' target=' _blank' rel='noopener noreferrer nofollow'>
            <img src={ACS} className='Logo' alt=''></img>
          </a>
          <a href='http://www.aero.pub.ro/wordpress/index.php/en/home/' target=' _blank' rel='noopener noreferrer nofollow'>
            <img src={FIA} className='Logo' alt=''></img>
          </a>
          <a href='http://www.mecanica.pub.ro/new/' target=' _blank' rel='noopener noreferrer nofollow'>
            <img src={FIMM} className='Logo' alt=''></img>
          </a>
        </div>
      </div >
    )
  }
}
