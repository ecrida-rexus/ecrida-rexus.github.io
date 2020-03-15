import Axios from 'axios'

import { ExperimentResponse } from './types'

export async function getExperiment(): Promise<ExperimentResponse> {
  try {
    const response = await Axios.get(
      'https://raw.githubusercontent.com/ecrida-rexus/ecrida-rexus.github.io/develop/src/data/Experiment.json'
    )
    return response.data as ExperimentResponse
  } catch (e) {
    throw new Error(`Error getting experiment: ${e}`)
  }
}
