import * as React from 'react'

import Button from '../Button'

import RexusBexus from './assets/RexusBexus.png'

import './index.scss'

export default function RexusBexusBanner() {
  return (
    <div className='RexusBexusBanner'>
      <img src={RexusBexus} alt='' />
      <h1>REXUS/BEXUS is a campaign organized by a bilateral Agency Agreement between the German Aerospace Center (DLR) and the Swedish National Space Agency (SNSA) in cooperation with European Space Agency (ESA). It gives European students the opportunity to carry out scientific experiments on-board sounding rockets and high-altitude balloons.</h1>
      <Button text='Learn More' url='http://rexusbexus.net/' yellow />
    </div>
  )
}
