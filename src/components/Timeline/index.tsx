import React from 'react'

import { getTimeline } from '../../services/Timeline'
import { TimelineResponse } from '../../services/Timeline/types'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import Button from '../Button'

import './index.scss'

import Timel from '../../data/Timeline.json'

export interface ITimelineProps {
}

export interface ITimelineState {
  content: TimelineResponse
}

export default class Timeline extends React.Component {
  state: ITimelineState = {
    content: []
  }

  async componentDidMount() {
    // const fetchedContent = await getTimeline()

    this.setState({ content: Timel })
  }

  get elements() {
    return this.state.content.map(item => (
      <VerticalTimelineElement
        className="vertical-timeline-element--work element"
        iconStyle={{ background: '#002B7F', color: '#fff' }}
      >
        {'img' in item ? <img src={item.img} alt='' /> : null}
        {'video' in item ? <video src={item.video} autoPlay muted loop /> : null}
        <h4>{item.date}</h4>
        <p>{item.text}</p>
        <div className='Footer'>
          {'url' in item ? <Button text={item.buttonText} url={item.url} /> : null}
        </div>
      </VerticalTimelineElement>
    ))
  }

  public render() {
    return (
      <div className='Timeline'>
        <VerticalTimeline>
          {this.elements}
        </VerticalTimeline>
      </div >
    )
  }
}
