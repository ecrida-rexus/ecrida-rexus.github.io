import Axios from 'axios'

import { TimelineResponse } from './types'

export async function getTimeline(): Promise<TimelineResponse> {
  try {
    const response = await Axios.get(
      'https://raw.githubusercontent.com/mihaipredoiu/ecrida/master/src/data/Timeline.json?token=AMTYZWKYFJTCCWZA2PS4HWK6OFU5Y'
    )
    return response.data as TimelineResponse
  } catch (e) {
    throw new Error(`Error getting timeline: ${e}`)
  }
}
