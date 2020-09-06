import React from 'react'

import { Link } from 'react-router-dom'

import Countdown from 'components/Countdown'
import Button from 'components/Button'

import Decoration from './assets/Decoration.svg'

import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

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
              </a>
              <a href='https://www.linkedin.com/company/ecrida-rexus-program/about/' target='_blank' rel='noopener noreferrer nofollow'>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className='SecondPresentation'>
            <p><span role='img' aria-label='RomanianFlag'>🇷🇴</span> ECRIDA are nevoie de ajutorul tău!</p>
            <Link to='/crowdfunding'>
              <Button text='Află mai multe' />
            </Link>
            <Countdown date={'2021-03-20T12:00:00'} />
          </div>
        </div>
        <img src={Decoration} className='Decoration' alt='' />
      </div >
    )
  }
}
