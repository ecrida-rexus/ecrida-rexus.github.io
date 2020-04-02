import React from 'react'

import { getExperiment } from '../../services/Experiment'
import { ExperimentResponse } from '../../services/Experiment/types'
import Exp from '../../data/Experiment.json'

import './index.scss'

export interface IExperimentProps {
}

export interface IExperimentState {
  content: ExperimentResponse
}

export default class Experiment extends React.Component<IExperimentProps, IExperimentState> {
  state: IExperimentState = {
    content: []
  }

  async componentDidMount() {
    // const fetchedContent = await getExperiment()

    this.setState({ content: Exp })
  }

  get content() {
    return this.state.content.map(item => {
      if (Array.isArray(item)) {
        return <div className='Row'>
          {item.map(source => {
            if ('img' in source) {
              return <img src={source.img} alt='' />
            }
            if ('video' in source) {
              return <video src={source.video} autoPlay muted loop />
            }
            return null
          })}
        </div>
      } else {
        if ('p' in item) {
          return <p>{item.p}</p>
        }
        if ('h1' in item) {
          return <h1>{item.h1}</h1>
        }
        if ('h2' in item) {
          return <h2>{item.h2}</h2>
        }
        return null
      }
    })
  }

  public render() {

    return (
      <div className='Experiment'>
        {this.content}
      </div >
    )
  }
}
