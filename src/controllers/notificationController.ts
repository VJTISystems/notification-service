import { Request, Response } from 'express';
import { NotificationService } from '../services/notificationService';

const service = new NotificationService();

export async function postNotification(req: Request, res: Response) {
  try {
    const notification = await service.send(req.body);
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ error: 'failed to send notification' });
  }
}
