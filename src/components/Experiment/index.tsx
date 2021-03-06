import React from 'react'

import Rodal from 'rodal'
import 'rodal/lib/rodal.css';

import Button from '../Button'

import { getExperiment } from '../../services/Experiment'
import { ExperimentResponse } from '../../services/Experiment/types'

import MainFigure from './assets/MainFigure.svg'

import './index.scss'

export interface IExperimentState {
  content: ExperimentResponse
  isRodalOpen: boolean
}

export default class Experiment extends React.Component<{}, IExperimentState> {
  state: IExperimentState = {
    content: [],
    isRodalOpen: false
  }

  async componentDidMount() {
    const fetchedContent = await getExperiment()

    this.setState({ content: fetchedContent })
  }

  get content() {
    return this.state.content.map((item, contentIndex) => {
      if (Array.isArray(item)) {
        return <div key={`c${contentIndex}`} className='Row'>
          {item.map((source, itemIndex) => {
            if ('img' in source) {
              return <img key={itemIndex} src={source.img} alt='' />
            }
            if ('video' in source) {
              return <video key={itemIndex} src={source.video} autoPlay muted loop />
            }
            return null
          })}
        </div>
      } else {
        if ('p' in item) {
          return <p key={`c${contentIndex}`}>{item.p}</p>
        }
        if ('h1' in item) {
          return <h1 key={`c${contentIndex}`}>{item.h1}</h1>
        }
        if ('h2' in item) {
          return <h2 key={`c${contentIndex}`}>{item.h2}</h2>
        }
        return null
      }
    })
  }

  openRodal = () => {
    this.setState({ isRodalOpen: true })
    document.body.style.overflow = 'hidden'
  }

  closeRodal = () => {
    this.setState({ isRodalOpen: false })
    document.body.style.overflow = 'auto'
  }

  public render() {

    return (
      <>
        <div className='ExperimentContainer'>
          <img src={MainFigure} alt='' />
          <div className='Description' >
            <h1>Our Experiment</h1>
            <p>The main goal of the ECRIDA experiment is to design and test a DLP-like printer for manufacturing 3D objects on-board of the REXUS 29 rocket.</p>
            <p>The schematic diagram describes the experimental set-up, which consists of 3 major assemblies.</p>
            <Button onClick={this.openRodal} text='Learn More' />
          </div>

          <Rodal visible={this.state.isRodalOpen} onClose={this.closeRodal}>
            <div className='Experiment' >
              {this.content}
            </div>
          </Rodal>
        </div >

      </>
    )
  }
}
