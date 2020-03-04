import React from 'react'

import Logo from './assets/Logo.svg'
import Facebook from './assets/Facebook.svg'
import Instagram from './assets/Instagram.svg'
import Linkedin from './assets/Linkedin.svg'

import './index.scss'

export interface IHeaderProps {
}

export interface IHeaderState {
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  state: IHeaderState = {
  }

  public render() {
    return (
      <div className='Header'>
        <div className='Group'>
          <img src={Logo} className='Logo' alt='logo' />
        </div>
        <div className='Group'>
          <p>Team</p>
          <p>Experiment</p>
          <p>Timeline</p>
          <p>Sponsors and Partners</p>
        </div>
        <div className='Group'>
          <a href='https://www.facebook.com/projectecrida' target="_blank" rel="noopener noreferrer">
            <img src={Facebook} className='SocialMediaIcon' alt='logo' />
          </a>
          <a href='https://www.instagram.com/projectecrida/' target="_blank" rel="noopener noreferrer">
            <img src={Instagram} className='SocialMediaIcon' alt='logo' />
          </a>
          <a href='https://www.linkedin.com/company/ecrida-rexus-program/about/' target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} className='SocialMediaIcon' alt='logo' />
          </a>
        </div>
      </div >
    )
  }
}
