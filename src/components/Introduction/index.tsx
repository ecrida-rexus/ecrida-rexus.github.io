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
              <img src={Logo} className='Logo' alt='' />
              <a href='http://rexusbexus.net/' target='_blank' rel='noopener noreferrer nofollow'>
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
            <p>Support our team</p>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{ marginBottom: '60px' }}>
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="GHFQY9CWZVQ8W" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" style={{ height: '55px' }} />
              <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <Countdown date={'2021-03-20T12:00:00'} />
          </div>
        </div>
        <img src={Decoration} className='Decoration' alt='' />
      </div >
    )
  }
}
