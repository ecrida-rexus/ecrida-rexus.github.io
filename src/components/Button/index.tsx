import React from 'react'

import './index.scss'

export interface IButtonProps {
  text?: string
  url?: string
  yellow?: boolean
  secondary?: boolean
  onClick?: () => void
}

export default class Button extends React.Component<IButtonProps> {
  get className() {
    if (this.props.yellow) {
      return 'yellow'
    }

    if (this.props.secondary) {
      return 'secondary'
    }

    return ''
  }

  get content() {
    if (this.props.onClick) {
      return (
        <button
          className={`Button ${this.className}`}
          onClick={this.props.onClick}
        >
          <span>{this.props.text}</span>
        </button>
      )
    } else {
      return (
        <a href={this.props.url} target='_blank' rel='noopener noreferrer'>
          <button className={`Button ${this.className}`}>
            <span>{this.props.text}</span>
          </button>
        </a>
      )
    }
  }

  public render() {
    return <>{this.content}</>
  }
}
