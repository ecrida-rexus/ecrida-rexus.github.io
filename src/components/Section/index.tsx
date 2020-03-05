import React from 'react'

import './index.scss'

export interface ISectionProps {
  headline: string
}

export interface ISectionState {
}

export default class Section extends React.Component<ISectionProps, ISectionState> {
  state: ISectionState = {
  }

  public render() {
    return (
      <div className='Section'>
        <h1>{this.props.headline}</h1>
        {this.props.children}
      </div >
    )
  }
}
