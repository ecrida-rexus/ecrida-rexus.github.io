import React from 'react'

import './index.scss'

export interface ITeamMemberProps {
  fullName: string
  image: string
  role: string
}

export interface ITeamMemberState {
}

export default class TeamMember extends React.Component<ITeamMemberProps, ITeamMemberState> {
  state: ITeamMemberState = {
  }

  public render() {
    return (
      <div className='TeamMember'>
        <img src={this.props.image} className='Image' alt={this.props.fullName}></img>
        <h1>{this.props.fullName}</h1>
        <h2>{this.props.role}</h2>
      </div >
    )
  }
}
