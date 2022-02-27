import React from 'react'

import Header from 'components/Header'
import Decoration from 'components/Decoration'
import Form from 'components/Form'
import Tier from 'components/Tier'

import './index.scss'

export default function CrowdfundingPage() {
  return (
    <div className='CrowdfundingPage'>
      <Header />
      <div className='CrowdfundingDescription'>
        <div className='Story'>
          <h1>How to support ECRIDA</h1>
          <div className='Tiers'>
          <Tier
            title='TIER 1'
            subtitle=''
            type='tier1'
            openModelRodal={() => {}}
          />
          <Tier
            title='TIER 2'
            subtitle=''
            type='tier2'
            openModelRodal={() => {}}
          />
          <Tier
            title='TIER 3'
            subtitle=''
            type='tier3'
            openModelRodal={() => {}}
          />
          </div>
        </div>
        <div className='Donations'>
          <Form />
        </div>
      </div>
      <Decoration />
    </div>
  )
}
