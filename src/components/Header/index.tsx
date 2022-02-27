import React from 'react'

import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

import Logo from './assets/Logo.svg'

import './index.scss'

export interface IHeaderProps {
  isMainPage?: boolean
}

export interface IHeaderState {
  isExpanded: boolean
}

export default function Header(props: IHeaderProps) {
  const mainPageLinks = (
    <>
      <Link offset={-80} to='introduction' smooth={true} duration={500}>
        <img src={Logo} className='Logo' alt='Project ECRIDA Logo' />
      </Link>
      <div className='SectionLinks'>
        <Link offset={-80} to='team' smooth={true} duration={500}>
          <p>Team</p>
        </Link>
        <Link offset={-80} to='experiment' smooth={true} duration={500}>
          <p>Experiment</p>
        </Link>
        <Link offset={-80} to='partners' smooth={true} duration={500}>
          <p>Sponsors and Partners</p>
        </Link>
      </div>
    </>
  )

  const crowdfundingPageLinks = (
    <>
      <RouterLink to='/'>
        <img src={Logo} className='Logo' alt='Project ECRIDA Logo' />
      </RouterLink>
      <div className='SectionLinks'>
        <RouterLink to='/'>
          <p>Go to website</p>
        </RouterLink>
      </div>
    </>
  )

  return (
    <div className='Header' >
      {props.isMainPage ? mainPageLinks : crowdfundingPageLinks}
    </div >
  )
}
