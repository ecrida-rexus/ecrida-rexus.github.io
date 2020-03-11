export interface TimelineElement {
  date: string
  text: string
  img?: string
  video?: string
  url?: string
  buttonText?: string
}

export type TimelineResponse = TimelineElement[]
