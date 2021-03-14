import { Account } from '../entities'

export interface AddAccount {
  add: (account: AddAccountModel) => Promise<Account>
}

export interface AddAccountModel {
  name: string
  email: string
  password: string
}
