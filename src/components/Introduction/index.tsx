import React from 'react'

import Countdown from '../Countdown'

import RexusBexus from './assets/RexusBexus.png'
import Logo from './assets/Logo.svg'
import Decoration from './assets/Decoration.svg'

import './index.scss'

export default class Introduction extends React.Component {
  public render() {
    return (
      <div className='Introduction'>
        <div className='Content'>
          <div className='Presentation'>
            <h1>We are ECRIDA</h1>
            <h2>a REXUS Student Experiment Programme team</h2>
            <div className='Logos'>
              <img src={Logo} className='Logo' alt='Project ECRIDA Logo' />
              <a href='http://rexusbexus.net/' target='_blank' rel='noopener noreferrer'>
                <img src={RexusBexus} className='Logo' alt='REXUS/BEXUS Logo' />
              </a>
            </div>
            <p>
              ECRIDA is multidisciplinary team of 10 students from
              Romania participating in the REXUS/BEXUS programme. Our
              experiment aims to print 3D samples in a low gravity
              environment using the UV photopolymerization phenomenon.
            </p>
            <p>
              REXUS/BEXUS is a campaign organized by a bilateral Agency
              Agreement between the German Aerospace Center (DLR) and the
              Swedish National Space Agency (SNSA) in cooperation with
              European Space Agency (ESA). It gives European students the
              opportunity to carry out scientific experiments on-board
              sounding rockets and high-altitude balloons.
            </p>
            <p>
              Our experiment will be launched on-board the RX29 Rocket
              from the Polar Circle, Sweden in March 2021.
            </p>
          </div>
          <div className='SecondPresentation'>
            <Countdown date={'2021-03-20T12:00:00'} />
          </div>
        </div>
        <img src={Decoration} className='Decoration' alt='decoration' />
      </div >
    )
  }
}
