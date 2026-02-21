export interface Notification {
  id: string;
  type: 'email' | 'system';
  recipient: string;
  message: string;
  sentAt?: Date;
}
