import { makeAutoObservable } from 'mobx'

export class UserAuth {
  login: string | undefined = 'maksim'
  sessionId: number | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }
}
