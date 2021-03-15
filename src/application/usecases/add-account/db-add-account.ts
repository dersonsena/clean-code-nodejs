import { Account } from '../../../domain/entities'
import { AddAccount, AddAccountModel } from '../../../domain/usecases'
import { Encrypter } from '../../contracts'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encryper: Encrypter
  ) {}

  async add (account: AddAccountModel): Promise<Account> {
    await this.encryper.encrypt(account.password)
    return await new Promise(resolve => resolve(null))
  }
}
