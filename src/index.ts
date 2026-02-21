import express from 'express';
import config from 'config';
import { postNotification } from './controllers/notificationController';
import logger from './utils/logger';

export const app = express();
app.use(express.json());

app.post('/notifications', postNotification);

export const port = config.get<number>('service.port');
export function start() {
  app.listen(port, () => {
    logger.info(`Notification service listening on port ${port}`);
  });
}

// only start when executed directly
if (require.main === module) {
  start();
}
