import React, { Component } from 'react'

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
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }

    if (diff >= (365.25 * 86400)) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
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
      <div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.days)}</strong>
            <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>
            <span>Hours</span>
          </span>
        </span>


        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            <span>Min</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            <span>Sec</span>
          </span>
        </span>
        <h2>until launch <span role="img" aria-label="rocket">🚀</span></h2>
      </div>
    )
  }
}

export default Countdown