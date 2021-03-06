import React from 'react'

import Button from '../Button'
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

import Lab from './assets/Lab.png'
import Campus from './assets/Campus.jpg'

import './index.scss'

export default function Team() {
  return (
    <div className='Team'>
      <div className='Row'>
        <TeamMember
          fullName='Radu Cioaca'
          image={Radu}
          role='Team Leader & Electronics'
        />
        <TeamMember
          fullName='Alexandru Hantascu'
          image={Alex}
          role='Mechanics'
        />
        <TeamMember
          fullName='Adrian Sisman'
          image={Adrian}
          role='Mechanics & Simulations'
        />
        <TeamMember
          fullName='Cosmin Calcii'
          image={Cosmin}
          role='Software'
        />
        <TeamMember
          fullName='Edwin Laszlo'
          image={Edwin}
          role='Optics & Science'
        />
        <TeamMember
          fullName='Iulia Roman'
          image={Iulia}
          role='Outreach & Fundraising'
        />
        <TeamMember fullName='Delia Vitalaru'
          image={Delia}
          role='Mission Analysis & Software'
        />
        <TeamMember
          fullName='Romica Stoica'
          image={Romica}
          role='Mechanics'
        />
        <TeamMember
          fullName='Paul Paraschiv'
          image={Paul}
          role='Verification & Testing'
        />
        <TeamMember
          fullName='Valentin Mocanu'
          image={Valentin}
          role='Electronics'
        />
      </div>
      <div className='LaboratoryContainer'>
        <div className='Column'>
          <h1>Our Laboratory</h1>
          <p>
            Our experiment is hosted by the Center for Advanced Research on New
            Materials, Products and Innovative Processes (CAMPUS), the UPB's
            advanced research & development center for multi - and inter - disciplinary technologies.
            </p>
          <a href='http://www.campus.upb.ro/website/' target=' _blank' rel='noopener noreferrer nofollow'>
            <Button text='CAMPUS Website' />
          </a>
        </div>
        <div className='Column'>
          <img src={Campus} alt='' />
          <img src={Lab} alt='' />
        </div>
      </div>
    </div >
  )
}
