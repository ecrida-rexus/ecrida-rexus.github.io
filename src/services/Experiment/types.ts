export type Paragraph = {
  p: string
}

export type H1 = {
  h1: string
}

export type H2 = {
  h2: string
}

export type ImageType = {
  img: string
}

export type Video = {
  video: string
}

export type Text = Paragraph | H1 | H2

export type Media = ImageType | Video

export type ExperimentResponse = (Text | Media[])[]
