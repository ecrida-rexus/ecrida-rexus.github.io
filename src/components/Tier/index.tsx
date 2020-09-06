import React from 'react'

import Button from 'components/Button'

import PayPal from './assets/PayPal.svg'

import './index.scss'

export interface ITierProps {
  title: string
  subtitle: string
  type: 'standard' | 'special'
  openDonationRodal?: () => void
  openModelRodal?: () => void
}

export default function Tier(props: ITierProps) {

  const standardList = (
    <ul>
      <li><p>Un loc pentru numele tău în secțiunea website-ului dedicată donatorilor *</p></li>
      <li><p>Un loc pentru numele tău în toate documentele și prezentările oficiale ale echipei *</p></li>
      <li><p>Mii de mulțumiri</p></li>
    </ul>
  )

  const specialList = (
    <ul>
      <li><p>Toate cele menționate la donația standard</p></li>
      <li><p>Gravarea laser a numelui sau a logo-ului propriu pe componentele ce vor fi expuse la Muzeul Militar din București</p></li>
    </ul>
  )

  return (
    <div className='Tier' >
      <div className='TierTitle'>
        <h1>{props.title}</h1>
      </div>
      <h2>{props.subtitle}</h2>
      <div>
        {props.type === 'standard' ? standardList : null}
        {props.type === 'special' ? specialList : null}
      </div>
      {props.type === 'standard' ? <h4>*cu acordul donatorului</h4> : null}
      {props.type === 'special' ?
        <h3 onClick={props.openModelRodal}>Vezi modelul 3D al componentei</h3> :
        null
      }
      <div className='Donate'>
        {props.type === 'standard' ? <Button text='Donează' /> : null}
        {props.type === 'special' ? <Button text='Alege Locul' onClick={props.openDonationRodal} /> : null}
        {props.type === 'standard' ?
          <img src={PayPal} alt='' /> :
          <img src={PayPal} alt='' style={{ visibility: 'hidden' }} />}
      </div>
    </div>
  )
}