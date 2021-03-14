import { HttpResponse } from '../contracts'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
