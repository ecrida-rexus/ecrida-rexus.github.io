import Axios from 'axios'

import { ExperimentResponse } from './types'

export async function getExperiment(): Promise<ExperimentResponse> {
  try {
    const response = await Axios.get(
      'https://raw.githubusercontent.com/mihaipredoiu/ecrida/master/src/data/Experiment.json?token=AMTYZWOIR5B7OVLALJLVDJC6O3KEC'
    )
    return response.data as ExperimentResponse
  } catch (e) {
    throw new Error(`Error getting experiment: ${e}`)
  }
}
