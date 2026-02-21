import { NotificationService } from '../../src/services/notificationService';

describe('NotificationService', () => {
  it('should populate sentAt when sending', async () => {
    const service = new NotificationService();
    const result = await service.send({
      id: '1',
      type: 'email',
      recipient: 'user@example.com',
      message: 'hello',
    });
    expect(result.sentAt).toBeDefined();
  });
});
