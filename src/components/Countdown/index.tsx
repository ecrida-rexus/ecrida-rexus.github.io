import React, { Component } from 'react'

import launch from './assets/launch.mp4'

import './index.scss'

interface ICountdownProps {
  date: string
}

class Countdown extends Component<ICountdownProps> {
  state = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  }

  interval: any

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date)
      date ? this.setState(date) : this.stop()
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  stop() {
    clearInterval(this.interval)
  }

  calculateCountdown(endDate: any) {
    let diff = (Date.parse(new Date(endDate).toISOString()) - Date.parse(new Date().toISOString())) / 1000

    if (diff <= 0) {
      return false
    }

    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }

    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }

    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }

    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = Math.floor(diff)

    return timeLeft
  }

  addLeadingZeros(value: any) {
    value = String(value)
    while (value.length < 2) {
      value = '0' + value
    }
    return value
  }

  render() {
    const countDown = this.state

    return (
      <div className='Countdown'>
        <div className='CountdownText'>
          <span className='Countdown-col'>
            <span className='Countdown-col-element'>
              <h1>{this.addLeadingZeros(countDown.days)}</h1>
              <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
            </span>
          </span>

          <span className='Countdown-col'>
            <span className='Countdown-col-element'>
              <h1>{this.addLeadingZeros(countDown.hours)}</h1>
              <span>Hours</span>
            </span>
          </span>

          <span className='Countdown-col'>
            <span className='Countdown-col-element'>
              <h1>{this.addLeadingZeros(countDown.min)}</h1>
              <span>Min</span>
            </span>
          </span>

          <span className='Countdown-col'>
            <span className='Countdown-col-element'>
              <h1>{this.addLeadingZeros(countDown.sec)}</h1>
              <span>Sec</span>
            </span>
          </span>
          <h2>until launch <span role='img' aria-label='rocket'>🚀</span></h2>
        </div>
        <video src={launch} autoPlay muted loop />
        <div className='Overlay' />
      </div>
    )
  }
}

export default Countdown