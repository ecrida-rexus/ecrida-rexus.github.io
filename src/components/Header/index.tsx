import React from 'react'

import { Link } from 'react-scroll'

// import SideMenu from '../SideMenu'

import Logo from './assets/Logo.svg'
// import Facebook from './assets/Facebook.svg'
// import Instagram from './assets/Instagram.svg'
// import Linkedin from './assets/Linkedin.svg'
// import OpenButton from './assets/OpenButton.svg'

import './index.scss'

export interface IHeaderProps {
}

export interface IHeaderState {
  isExpanded: boolean
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  state: IHeaderState = {
    isExpanded: false
  }

  onMenuExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  onMenuCollapse = () => {
    this.setState({ isExpanded: false })
  }

  public render() {
    return (
      <div className={`Header ${this.state.isExpanded ? 'expanded' : ''}`} >
        <Link offset={-80} to='introduction' smooth={true} duration={500}>
          <img src={Logo} className='Logo' alt='Project ECRIDA Logo' />
        </Link>
        <div className='SectionLinks'>
          <Link offset={-80} to='team' smooth={true} duration={500} onClick={this.onMenuCollapse}>
            <p>Team</p>
          </Link>
          <Link offset={-80} to='experiment' smooth={true} duration={500} onClick={this.onMenuCollapse}>
            <p>Experiment</p>
          </Link>
          <Link offset={-80} to='activity' smooth={true} duration={500} onClick={this.onMenuCollapse}>
            <p>Activity</p>
          </Link>
          <Link offset={-80} to='partners' smooth={true} duration={500} onClick={this.onMenuCollapse}>
            <p>Sponsors and Partners</p>
          </Link>
        </div>
        {/* <div className='Controls'>
          <div className='MenuButtonContainer'>
            <img
              className='MenuButton'
              src={OpenButton}
              alt=''
              onClick={this.onMenuExpand}
            />
          </div>
        </div> */}
      </div >
    )
  }
}
