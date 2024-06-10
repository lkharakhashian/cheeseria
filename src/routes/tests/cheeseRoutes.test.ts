import app from '../../app';
const request = require('supertest');


describe('Cheese Routes', () => {
  it('should return all cheeses', async () => {
    const response = await request(app).get('/api/cheeses');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
