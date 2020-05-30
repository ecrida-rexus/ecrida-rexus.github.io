import React from 'react'

import ImageGallery from 'react-image-gallery'

import TeamMember from './components/TeamMember'

import Radu from './assets/Radu.jpg'
import Cosmin from './assets/Cosmin.jpg'
import Alex from './assets/Alex.jpg'
import Adrian from './assets/Adrian.jpg'
import Delia from './assets/Delia.jpg'
import Edwin from './assets/Edwin.jpg'
import Iulia from './assets/Iulia.jpg'
import Paul from './assets/Paul.jpg'
import Romica from './assets/Romica.jpg'
import Valentin from './assets/Valentin.jpg'

import Bucharest from './assets/Bucharest.jpg'
import Noordwijk from './assets/Noordwijk.jpg'
import Kiruna from './assets/Kiruna.jpg'

import './index.scss'

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
]

export default class Team extends React.Component {
  public render() {
    return (
      <div className='Team'>
        <div className='Row'>
          <TeamMember fullName='Radu Cioaca' image={Radu} role='Team Leader & Electronics' />
          <TeamMember fullName='Alexandru Hantascu' image={Alex} role='Mechanics' />
          <TeamMember fullName='Adrian Sisman' image={Adrian} role='Mechanics & Simulations' />
          <TeamMember fullName='Cosmin Calcii' image={Cosmin} role='Software' />
          <TeamMember fullName='Edwin Laszlo' image={Edwin} role='Optics & Science' />
          <TeamMember fullName='Iulia Roman' image={Iulia} role='Outreach & Fundraising' />
          <TeamMember fullName='Delia Vitalaru' image={Delia} role='Mission Analysis & Software' />
          <TeamMember fullName='Romica Stoica' image={Romica} role='Mechanics' />
          <TeamMember fullName='Paul Paraschiv' image={Paul} role='Verification & Testing' />
          <TeamMember fullName='Valentin Mocanu' image={Valentin} role='Electronics' />
        </div>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets />
      </div >
    )
  }
}
