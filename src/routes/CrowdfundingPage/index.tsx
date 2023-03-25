import React from 'react'

import Header from 'components/Header'
import Decoration from 'components/Decoration'
import Form from 'components/Form'
import Tier from 'components/Tier'

import Rodal from 'rodal'

import './index.scss'

export default function CrowdfundingPage() {
  const [isTier1ModalOpen, setIsTier1ModalOpen] = React.useState(false)

  return (
    <div className='CrowdfundingPage'>
      <Header />
      <div className='CrowdfundingDescription'>
        <div className='Story'>
          <h1>How to support ECRIDA</h1>
          <div className='Tiers'>
            <Tier
              title='TIER 1'
              subtitle='20 €'
              type='tier1'
              openModelRodal={() => setIsTier1ModalOpen(true)}
            />
            <Tier
              title='TIER 2'
              subtitle='80 €'
              type='tier2'
              openModelRodal={() => {}}
            />
            <Tier
              title='TIER 3'
              subtitle='200 €'
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

      <Rodal
        visible={isTier1ModalOpen}
        onClose={() => setIsTier1ModalOpen(false)}
      >
        <div className='Tier1Description'>
          <p>TIER 1</p>
          <p>TEST</p>
        </div>
      </Rodal>
    </div>
  )
}
