import React, { useState } from 'react'

import Rodal from 'rodal'

import Header from 'components/Header'
import Decoration from 'components/Decoration'
import Tier from 'components/Tier'
import ExtendedDonation from 'components/ExtendedDonation'

import museum from './assets/museum.jpg'
import laser from './assets/laser.jpg'
import capsule from './assets/capsule.jpg'

import './index.scss'

export default function CrowdfundingPage() {
  const [isModelRodalOpen, setIsModelRodalOpen] = useState(false)
  const [isDonationRodalOpen, setIsDonationRodalOpen] = useState(false)

  return (
    <div className='CrowdfundingPage'>
      <Header />
      <div className='CrowdfundingDescripton'>
        <div className='Story'>
          <h1>ECRIDA are nevoie de ajutorul tău</h1>
          <h2>Scopul nostru este de a finaliza cu succes proiectul și campania de lansare din luna martie 2021.</h2>
          <p>Prin campania noastră de crowdfunding dorim să le permitem susținătorilor noștri să își graveze
          numele pe experimentul nostru ce va zbura în spațiu și va fi apoi depus în luna aprilie 2021 la
          Muzeul Militar din București, în cadrul Expoziției de Aviație și Spațiu, lângă capsula primului
          cosmonaut român, Dumitru Prunariu.
            </p>
          <div className='StoryImages'>
            <img src={museum} alt='' />
            <img src={laser} alt='' />
            <img src={capsule} alt='' />
          </div>
        </div>
        <div className='Donations'>
          <Tier
            title='Oferă-ne o mână de ajutor'
            subtitle='Donează orice sumă, iar noi îți  oferim în schimb:'
            type='standard'
          />
          <Tier
            title='Gravează-ți numele pe experimentul ECRIDA'
            subtitle='În schimbul unei donații de minimum 300 RON (63 €) îți oferim: '
            type='special'
            openModelRodal={() => setIsModelRodalOpen(true)}
            openDonationRodal={() => setIsDonationRodalOpen(true)}
          />
        </div>
      </div>
      <Decoration />
      <Rodal visible={isModelRodalOpen} onClose={() => setIsModelRodalOpen(false)}>
        <iframe
          title='sayduck3dViewer'
          name='sayduck3dViewer'
          style={{ minHeight: '50vh', minWidth: '300px', width: '100%', height: '100%' }}
          src='https://sayduck.com/3d/JvsK?background-color=studio&starting-variant=b4e323a0-6132-4739-88a8-f28a3c9e39b4&'
          frameBorder='0'
        ></iframe>
      </Rodal>
      <Rodal visible={isDonationRodalOpen} onClose={() => setIsDonationRodalOpen(false)}>
        <ExtendedDonation />
      </Rodal>
    </div>
  )
}