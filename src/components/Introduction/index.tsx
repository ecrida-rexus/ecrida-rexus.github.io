import React from 'react'

import ImageGallery from 'react-image-gallery'

import RexusBexus from './assets/RexusBexus.png'
import Logo from './assets/Logo.svg'
import Noordwijk from './assets/Noordwijk.jpg'
import Kiruna from './assets/Kiruna.jpg'
import Decoration from './assets/Decoration.svg'

import './index.scss'

export interface IIntroductionProps {
}

export interface IIntroductionState {
}

const images = [
  {
    original: Kiruna,
    description: 'Kiruna, Sweden'
  },
  {
    original: Noordwijk,
    description: 'Noordwijk, Netherlands, ESTEC Centre'
  },
];

export default class Introduction extends React.Component<IIntroductionProps, IIntroductionState> {
  state: IIntroductionState = {
  }

  public render() {
    return (
      <div className='Introduction'>
        <div className='Content'>
          <div className='Presentation'>
            <h1>We are ECRIDA</h1>
            <h2>a REXUS Student Experiment Programme team</h2>
            <div className='Logos'>
              <img src={Logo} className='Logo' alt='logo' />
              <a href='http://rexusbexus.net/' target='_blank' rel='noopener noreferrer'>
                <img src={RexusBexus} className='Logo' alt='logo' />
              </a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          {/* <img src={TeamImage} className='Image' alt='decoration' /> */}
          <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} showBullets />
        </div>
        <img src={Decoration} className='Decoration' alt='decoration' />
      </div >
    )
  }
}
