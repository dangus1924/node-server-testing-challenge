const index = require('./index')
const supertest = require('supertest')



test('Home call', async () => {
    const res = await supertest(index).get('/')
    expect(res.status).toBe(200);
    expect(res.type).toBe('application/json')
    expect(res.body.message).toBe('Node Testing with JEST!')
})