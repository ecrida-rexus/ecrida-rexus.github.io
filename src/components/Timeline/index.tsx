import React from 'react'

import { TimelineResponse } from '../../services/Timeline/types'

import Button from '../Button'

import './index.scss'

export interface ITimelineProps {
}

export interface ITimelineState {
  content: TimelineResponse
}

export default class Timeline extends React.Component {

  public render() {
    return (
      <div className='Timeline'>
        <div className='Row'>
          <div className='Title'>
            <h1>Latest Facebook activity</h1>
            <Button text='Visit our Facebook page'></Button>
          </div>
          <div
            className="fb-post"
            data-href="https://www.facebook.com/projectecrida/posts/350680929678735"
            data-show-text="true"
            data-width="">
            <blockquote
              cite="https://www.facebook.com/projectecrida/posts/350680929678735"
              className="fb-xfbml-parse-ignore">
              <p>[RO] Săptămâna trecută, în cadrul IPR - Integration Progress Review, am avut plăcerea să o avem în laboratorul nostru pe...</p>
              Posted by
              <a href="https://www.facebook.com/projectecrida/">
                REXUS - Project Ecrida
              </a>
              on
              <a href="https://www.facebook.com/projectecrida/posts/350680929678735">
                Wednesday, August 26, 2020
              </a>
            </blockquote>
          </div>
        </div>
      </div >
    )
  }
} 
