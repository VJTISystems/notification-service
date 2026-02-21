import request from 'supertest';
import { app } from '../../src/index';

describe('Notification API', () => {
  it('should accept POST /notifications', async () => {
    const response = await request(app)
      .post('/notifications')
      .send({
        id: '1',
        type: 'system',
        recipient: 'user',
        message: 'test'
      });
    expect(response.status).toBe(201);
    expect(response.body.sentAt).toBeDefined();
  });
});
