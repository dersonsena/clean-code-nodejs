import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  it('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Kilderson',
        email: 'dersonsena@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
