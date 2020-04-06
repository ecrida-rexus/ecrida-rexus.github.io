import React from 'react'

import ImageGallery from 'react-image-gallery'

import RexusBexus from './assets/RexusBexus.png'
import Logo from './assets/Logo.svg'

import Bucharest from './assets/Bucharest.jpg'
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
    original: Bucharest,
    description: 'Bucharest, Romania 🇷🇴'
  },
  {
    original: Kiruna,
    description: 'Kiruna, Sweden 🇸🇪'
  },
  {
    original: Noordwijk,
    description: 'Noordwijk, Netherlands, ESTEC Centre 🇳🇱'
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
            <p>
              ECRIDA is a Romanian multidisciplinary team of 10 students from 2
              universities which participates in the REXUS CYCLE 13 programme.
              We propose the study of the 3D printing phenomenon using UV resin
              polymerization in a low gravity environment.
            </p>
            <p>
              REXUS is a campaign organized by a bilateral Agency
              Agreement between the German Aerospace Center (DLR)
              and the Swedish National Space Agency (SNSA) in
              cooperation with European Space Agency ESA. It gives
              European students the opportunity to carry out
              scientific experiments in low gravity conditions
              on-board a sounding rocket.
            </p>
            <p>
              Our Experiment will be launched inside the RX29 rocket in 2021 from the Polar Circle.
</p>
          </div>
          <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} showBullets />
        </div>
        <img src={Decoration} className='Decoration' alt='decoration' />
      </div >
    )
  }
}
