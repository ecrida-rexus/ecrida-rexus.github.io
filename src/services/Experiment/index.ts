import Axios from 'axios'

import { ExperimentResponse } from './types'

export async function getExperiment(): Promise<ExperimentResponse> {
  try {
    const response = await Axios.get(
      'https://raw.githubusercontent.com/mihaipredoiu/ecrida/master/src/data/Experiment.json?token=AMTYZWPFRSAYIJ3NCN3UQGS6OF3VM'
    )
    return response.data as ExperimentResponse
  } catch (e) {
    throw new Error(`Error getting experiment: ${e}`)
  }
}
