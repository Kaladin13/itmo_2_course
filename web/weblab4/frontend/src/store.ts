import { makeAutoObservable } from 'mobx'

export class UserAuth {
  login: string | undefined = undefined
  sessionId: number | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }
}
