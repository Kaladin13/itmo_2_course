import axios from 'axios'
import { User } from '../models/User'

const API_HOST = process.env.API_HOST || 'http://localhost:8240'

const api = axios.create({
  baseURL: API_HOST,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default class AuthApi {
  static auth = () => {
    return api.get<User>('auth')
  }

  // TODO: Временно недоступно
  // static register = (login: string, password: string) {
  //   return api.post<User>('auth', {login, password})
  // }
}
