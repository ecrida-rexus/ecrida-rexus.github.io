import Axios from 'axios'

import { TimelineResponse } from './types'

export async function getTimeline(): Promise<TimelineResponse> {
  try {
    const response = await Axios.get(
      'https://raw.githubusercontent.com/ecrida-rexus/ecrida-rexus.github.io/develop/src/data/Timeline.json'
    )

    return response.data as TimelineResponse
  } catch (e) {
    throw new Error(`Error getting timeline: ${e}`)
  }
}
