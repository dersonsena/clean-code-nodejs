import { Controller, HttpRequest, HttpResponse } from '../contracts'
import { MissingParamError } from '../errors'
import { badRequest } from '../helpers'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'password_confirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
