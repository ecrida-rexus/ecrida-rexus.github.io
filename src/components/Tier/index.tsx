import './index.scss'

import React from 'react'

export interface ITierProps {
  title: string
  subtitle: string
  type: 'tier1' | 'tier2' | 'tier3'
  openModelRodal?: () => void
}

export default function Tier(props: ITierProps) {
  const tier1List = (
    <ul>
      <li>
        <p>NFT ECRIDA-SPACE Collection</p>
      </li>
    </ul>
  )

  const tier2List = (
    <ul>
      <li>
        <p>NFT ECRIDA-SPACE Collection</p>
      </li>
      <li>
        <p>Name engraving on experiment lid</p>
      </li>
    </ul>
  )

  const tier3List = (
    <ul>
      <li>
        <p>NFT ECRIDA-SPACE Collection</p>
      </li>
      <li>
        <p>Name engraving on experiment lid</p>
      </li>
      <li>
        <p> Mountain Screw reward</p>
      </li>
    </ul>
  )

  return (
    <div className='Tier'>
      <div className='TierTitle'>
        <h1>{props.title}</h1>
      </div>
      <h2>{props.subtitle}</h2>
      <div>
        {props.type === 'tier1' && tier1List}
        {props.type === 'tier2' && tier2List}
        {props.type === 'tier3' && tier3List}
      </div>
      <h3 onClick={props.openModelRodal}>Read More</h3>
    </div>
  )
}
