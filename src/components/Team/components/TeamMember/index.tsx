import * as React from 'react'

import './index.scss'

export interface ITeamMemberProps {
  fullName: string
  image?: string
  role: string
  isCollapsed?: boolean
}

export default function TeamMember(props: ITeamMemberProps) {
  const image = props.image && !props.isCollapsed ?
    <img src={props.image} className='Image' alt={props.fullName}></img> :
    null

  const className =
    `TeamMember ${!props.image || props.isCollapsed ? 'collapsed' : ''}`

  return (
    <div className={className}>
      {image}
      <h1>{props.fullName}</h1>
      <h2>{props.role}</h2>
    </div >
  )
}
