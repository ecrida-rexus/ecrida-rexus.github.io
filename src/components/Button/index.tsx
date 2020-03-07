import React from 'react'

import './index.scss'

export interface IButtonProps {
  text: string
  url: string
  onClick?: () => void
}

export default class Button extends React.Component<IButtonProps> {
  get content() {
    if (this.props.onClick) {
      return (
        <button className='Button' onClick={this.props.onClick}>
          <p>{this.props.text}</p>
        </button>
      )
    } else {
      return (
        <a href={this.props.url} target='_blank' rel='noopener noreferrer'>
          <button className='Button'>
            <p>{this.props.text}</p>
          </button>
        </a>
      )
    }
  }

  public render() {
    return <>{this.content}</>
  }
}
