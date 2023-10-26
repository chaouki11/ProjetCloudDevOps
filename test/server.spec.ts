import request from 'supertest';
const { app } = require('../src/server');

describe('Express Server Tests', () => {
  it('should return a 404 for an unknown endpoint', async () => {
    const response = await request(app).get('/unknown-endpoint');
    expect(response.status).toBe(404);
  });

  it('should return system information for /api/v1/sysinfo', async () => {
    const response = await request(app).get('/api/v1/sysinfo');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('cpu');
    expect(response.body).toHaveProperty('system');
    expect(response.body).toHaveProperty('mem');
    // Add more assertions as needed
  });

  it('should return CPU information for /api/v1/cpu', async () => {
    const response = await request(app).get('/api/v1/cpu');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('manufacturer');
    expect(response.body).toHaveProperty('brand');
    
  });

  
});
