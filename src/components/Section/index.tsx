import React from 'react'

import './index.scss'
import Button from '../Button'

export interface ISectionProps {
  headline: string
  onExpand?: () => void
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
        {this.props.onExpand ? <Button text='Read more' url='' onClick={this.props.onExpand} /> : null}
      </div >
    )
  }
}
