import { Dot } from './Dot'

export type Hit = {
  result: boolean
  author: string
  sessionId: number
} & Dot
