import { AddAccountRepository } from '../../contracts'
import { Account, AddAccount, AddAccountModel, Encrypter } from './contracts'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encryper: Encrypter,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (accountData: AddAccountModel): Promise<Account> {
    const hashedPassword = await this.encryper.encrypt(accountData.password)
    return await this.addAccountRepository.add({ ...accountData, password: hashedPassword })
  }
}
