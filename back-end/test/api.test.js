const request = require('supertest')
const config = require('../config/envs');
const app = require('../config/app')(config)

// Testing the API using supertest
describe('Test the users path', () => {
    test('2.1.1', () => {
        return request(app)
          .post('/api/signup')
          .send({email: 'kyrcha@gmail.com', password: '12345678', retypedPassword: '12345678'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201);
    });
})
