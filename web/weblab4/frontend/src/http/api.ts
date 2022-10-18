import axios from 'axios'
import { Dot } from '../models/Dot'
import { Hit } from '../models/Hit'

const API_HOST = process.env.API_HOST || 'http://localhost:9999'

const api = axios.create({
  baseURL: API_HOST,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default class Api {
  static getAllHits = (login: string) => {
    return api.get<Hit[]>(`/hit-service/hits?login=${login}`)
  }

  static sendHit = (dot: Dot, sessionId: number, login: string) => {
    return api.post<Hit>('/hit-service/hit', {
      ...dot,
      login: login,
      sessionId: sessionId,
    })
  }
}
