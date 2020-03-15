import React from 'react'

import TeamMember from './components/TeamMember'

import './index.scss'

export default class Team extends React.Component {
  public render() {
    const Image = 'https://picsum.photos/500/500'

    return (
      <div className='Team'>
        <div className='Row'>
          <TeamMember fullName='Lorem Ipsum' image={Image} role='Team Leader' />
          <TeamMember fullName='Lorem Ipsum' image={Image} role='Team Leader' />
          <TeamMember fullName='Lorem Ipsum' image={Image} role='Team Leader' />
          <TeamMember fullName='Lorem Ipsum' image={Image} role='Team Leader' />
        </div>
        <div className='Row'>
          <TeamMember fullName='Lorem Ipsum' image={Image} role='Team Leader' />
          <TeamMember fullName='Lorem Ipsum' image={Image} role='Team Leader' />
          <TeamMember fullName='Lorem Ipsum' image={Image} role='Team Leader' />
          <TeamMember fullName='Lorem Ipsum' image={Image} role='Team Leader' />
          <TeamMember fullName='Lorem Ipsum' image={Image} role='Team Leader' />
        </div>
      </div >
    )
  }
}
