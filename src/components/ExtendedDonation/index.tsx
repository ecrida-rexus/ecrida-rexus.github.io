import React, { useState } from 'react'

import PriceCard from 'components/PriceCard'
import Button from 'components/Button'

import capsule from './assets/capsule.jpg'

import './index.scss'

export default function ExtendedDonation() {
  const [selectedAmount, setSelectedAmount] = useState<number>(0)

  const title = (
    <>
      <h1>Îți mulțumim că dorești să ne susții proiectul!</h1>
      <h2>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h2>
    </>
  )

  const desktopTitle = (
    <div className='PricesDesktopTitle'>
      {title}
    </div>
  )

  const mobileTitle = (
    <div className='PricesMobileTitle'>
      {title}
    </div>
  )

  return (
    <div className='ExtendedDonation'>
      {mobileTitle}
      <img src={capsule} alt='' />
      <div className='Prices'>
        {desktopTitle}
        <div>
          <PriceCard
            title='Zona Roșie'
            amount={300}
            selected={selectedAmount === 300}
            onClick={() => setSelectedAmount(300)}
          />
          <PriceCard
            title='Zona Verde'
            amount={500}
            selected={selectedAmount === 500}
            onClick={() => setSelectedAmount(500)}
          />
        </div>
        <div
          className={`ButtonContainer ${selectedAmount === 0 ? 'disabled' : ''}`}
        >
          <Button text='Donează' />
        </div>
      </div>
    </div>
  )
}
