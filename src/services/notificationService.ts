import { Notification } from '../models/notification';
import logger from '../utils/logger';

export class NotificationService {
  async send(notification: Notification): Promise<Notification> {
    // dummy implementation
    logger.info(`sending ${notification.type} to ${notification.recipient}`);
    notification.sentAt = new Date();
    return notification;
  }
}
