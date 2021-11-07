import React from 'react'

import Header from 'components/Header'
import Decoration from 'components/Decoration'
import Form from 'components/Form'

import second from './assets/second.jpg'
import third from './assets/third.jpg'
import first from './assets/first.jpg'

import './index.scss'

export default function CrowdfundingPage() {
  return (
    <div className='CrowdfundingPage'>
      <Header />
      <div className='CrowdfundingDescripton'>
        <div className='Story'>
          <h1>ECRIDA are nevoie de ajutorul tău</h1>
          <h2>În schimbul unei donații, numele tău poate fi gravat pe o placuță ce va ajunge în spațiu alături de experimentul nostru.</h2>
          <p>
            Pentru a face acest lucru posibil, sunt necesari următorii pași:
              <ul>
                <li>Completează datele personale în formularul alăturat. Dacă dorești gravat un alt text decât numele tău, trece-l la câmpul `Text Alternativ`.</li>
                <li>Apasă butonul `Mai Departe`.</li>
                <li>Butoanele ce vor apărea pe ecran reprezintă linkuri către Paypal și Revolut. Apasă pe unul dintre ele pentru a realiza donația.</li>
              </ul>
            Indiferent dacă realizezi sau nu donația acum, te vom contacta pentru a confirma procesul de gravare.
          </p>
          <div className='StoryImages'>
            <img src={first} alt='' />
            <img src={second} alt='' />
            <img src={third} alt='' />
          </div>
        </div>
        <div className='Donations'>
          <Form onClick={() => {console.log('Clicked')}}/>
          {/* <Tier
            title='Gravează-ți numele pe experimentul ECRIDA'
            subtitle='În schimbul unei donații de minimum 300 RON (63 €) îți oferim: '
            type='special'
            openModelRodal={() => setIsModelRodalOpen(true)}
            openDonationRodal={() => setIsDonationRodalOpen(true)}
          /> */}
        </div>
      </div>
      <Decoration />
    </div>
  )
}