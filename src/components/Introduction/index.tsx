import React from 'react'

import Countdown from '../Countdown'

import Decoration from './assets/Decoration.svg'

import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

import DonateButton from './assets/DonateButton.svg'

import './index.scss'

export default class Introduction extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://www.gofundme.com/static/js/embed.js";
    script.async = true;

    document.body.appendChild(script);
  }

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
              from the Polar Circle, Sweden in March 2021.
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
                {/* <img src={Instagram} className='SocialMediaIcon' alt='' /> */}
              </a>
              <a href='https://www.linkedin.com/company/ecrida-rexus-program/about/' target='_blank' rel='noopener noreferrer nofollow'>
                {/* <img src={Linkedin} className='SocialMediaIcon' alt='' /> */}
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className='SecondPresentation'>
            <div className='Row'>
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
                    style={{ height: '70px' }}
                  />
                </form>
              </div>

              {/* <div className='PaypalCard'>
                <p>Contact us</p>
                <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                  <input type='hidden' name='cmd' value='_s-xclick' />
                  <input type='hidden' name='hosted_button_id' value='GHFQY9CWZVQ8W' />
                  <input
                    type='image'
                    src={DonateButton}
                    name='submit'
                    title='PayPal - The safer, easier way to pay online!'
                    alt=''
                    style={{ height: '70px' }}
                  />
                </form>
              </div> */}
              <div
                className="gfm-embed"
                data-url="https://www.gofundme.com/f/protect-farm-field-workers/widget/medium/"
                style={{ width: '45%' }}
              >
              </div>
            </div>
            <Countdown date={'2021-03-20T12:00:00'} />
          </div>
        </div>
        {/* <img src={Logo} className='Logo' alt='' /> */}
        <img src={Decoration} className='Decoration' alt='' />
      </div >
    )
  }
}
