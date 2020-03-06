import React from 'react'

import './index.scss'

export interface IButtonProps {
  text: string
  url: string
}

export default class Button extends React.Component<IButtonProps> {
  public render() {
    return (
      <a href={this.props.url} target='_blank' rel='noopener noreferrer'>
        <button className='Button'>
          <p>{this.props.text}</p>
        </button>
      </a>
    )
  }
}
