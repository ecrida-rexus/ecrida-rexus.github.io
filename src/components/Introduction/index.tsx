import React from 'react'

import Countdown from 'components/Countdown'
import Decoration from 'components/Decoration'

import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

import DonateButton from './assets/donate.gif'

import './index.scss'

export default class Introduction extends React.Component {
  public render() {
    return (
      <div className='Introduction'>
        <div className='Content'>
          <div className='AboutUs'>
            <h1>We are ECRIDA</h1>
            <h2>a REXUS Student Experiment Programme team</h2>
            <p>
              ECRIDA is multidisciplinary team of 10 students from
              Romania participating in the REXUS/BEXUS programme. Our
              experiment aims to print 3D samples in a low gravity
              environment using the UV photopolymerization phenomenon.
            </p>
            <p>
              Our experiment will be launched on-board the RX29 Rocket
              from the Polar Circle, Sweden in March 2022.
            </p>
            <div className='Email'>
              <h3>EMAIL</h3>
              <p>ecrida.rexus@gmail.com</p>
            </div>
            <div className='SocialMedia'>
              <h3>SOCIAL MEDIA</h3>
              <a href='https://www.facebook.com/projectecrida' target='_blank' rel='noopener noreferrer nofollow'>
                <FaFacebookF />
              </a>
              <a href='https://www.instagram.com/projectecrida/' target='_blank' rel='noopener noreferrer nofollow'>
                <FaInstagram />
              </a>
              <a href='https://www.linkedin.com/company/ecrida-rexus-program/about/' target='_blank' rel='noopener noreferrer nofollow'>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className='Announcements'>
            {/* <p><span role='img' aria-label='RomanianFlag'>[🇷🇴]</span> ECRIDA are nevoie de ajutorul tău!</p>
            <Link to='/crowdfunding'>
              <Button text='Află mai multe' />
            </Link> */}
            <div className='PaypalCard'>
              <p>Support our project via PayPal</p>
              <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                <input type='hidden' name='cmd' value='_s-xclick' />
                <input type='hidden' name='hosted_button_id' value='GHFQY9CWZVQ8W' />
                <input
                  type='image'
                  src={DonateButton}
                  name='submit'
                  title='PayPal - The safer, easier way to pay online!'
                  alt=''
                  style={{ height: '50px' }}
                  formTarget='blank'
                />
              </form>
            </div>

            <Countdown date={'2022-03-20T12:00:00'} />
            <div className='SecondPresentation'>
              <p>Support our team</p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{ marginBottom: '60px' }}>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="GHFQY9CWZVQ8W" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" style={{ height: '55px' }} />
                <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
              <Countdown date={'2022-03-20T12:00:00'} />
            </div>
          </div>
          <Decoration />
        </div >
    )
  }
}
