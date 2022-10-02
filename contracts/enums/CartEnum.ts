export enum CartStatus {
  ADDED = 'added',
  DELETED = 'removed',
  BOUGHT = 'bought',
  CANCELLED = 'cancelled',
}

export enum ReminderType {
  PERCENT_CLAIMED = 'percent_claimed',
  DAYS = 'days',
}

export enum ReminderFrequency {
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
}
