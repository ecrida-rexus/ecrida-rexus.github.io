import React from 'react'

import { FaCheck } from 'react-icons/fa'

import './index.scss'

export interface IPriceCardProps {
  title: string
  amount: number
  selected?: boolean
  onClick: () => void
}

export default function PriceCard(props: IPriceCardProps) {
  return (
    <div
      className={`PriceCard ${props.selected ? 'selected' : ''}`}
      onClick={props.onClick}
    >
      <h1>{props.title.toLocaleUpperCase()}</h1>
      <div className='RightSide'>
        <h2>{`${props.amount} RON`}</h2>
        <div className='Checkbox'>
          <FaCheck className={`icon ${props.selected ? 'selected' : ''}`} />
        </div>
      </div>
    </div>
  )
}