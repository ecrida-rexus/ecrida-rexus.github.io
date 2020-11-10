import React from 'react'

import './index.scss'

export interface ISectionProps {
  headline?: string
  onExpand?: () => void
}

export default function Section(props: React.PropsWithChildren<ISectionProps>) {
  return (
    <div className='Section'>
      {props.headline ? <h1>{props.headline}</h1> : null}
      {props.children}
    </div >
  )
}
