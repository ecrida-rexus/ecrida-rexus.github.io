import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import './index.scss'
import 'react-vertical-timeline-component/style.min.css'
import Button from '../Button'

export default class Timeline extends React.Component {
  get elements() {
    const st = [{
      date: 'March 5, 2020',
      text: 'Happy to announce that we reached more than 1800 likes on Facebook! Stay tuned..  more news to come.',
      url: ''
    },
    {
      date: 'February 15, 2020',
      text: 'The Student Training Week is over. After a week of training and after our PDR , we are motivated to keep working on our experiment. In June, the REXUS teams will meet again for the Critical Design Review in Germany.',
      url: ''
    }]

    return st.map(item => (
      <VerticalTimelineElement
        className="vertical-timeline-element--work element"
        iconStyle={{ background: '#002B7F', color: '#fff' }}
      >
        <img src='https://scontent.fotp3-2.fna.fbcdn.net/v/t1.0-9/89177664_219796762767153_3725919945012281344_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=PNm5UsmrlI0AX_bHlW4&_nc_ht=scontent.fotp3-2.fna&oh=896bdf5c8568bd38dc33bfba14416980&oe=5E97FF69' alt=''></img>
        <h4>{item.date}</h4>
        <p>{item.text}</p>
        <div className='Footer'>
          <Button text='See on Facebook' url='https://www.google.com' />
        </div>
      </VerticalTimelineElement>
    ))
  }


  public render() {
    return (
      <div className='Timeline'>
        <VerticalTimeline>
          {this.elements}
          {/* <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          /> */}
        </VerticalTimeline>
      </div >
    )
  }
}
