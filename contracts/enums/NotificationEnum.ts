export enum NotificationEvents {
  event_reminder = 'EVENT_REMINDER',
  weekly_summary = 'WEEKLY_SUMMARY',
  added_to_cart = 'ADDED_TO_CART',
  added_to_budget = 'ADDED_TO_BUDGET',
  booking_confirmation = 'BOOKING_CONFIRMATION',
  payment_failed = 'PAYMENT_FAILED',
  payment_method_errors = 'PAYMENT_METHOD_ERROR',
  sign_in_activity = 'SIGNIN_ACTIVITY',
  account_deactivation = 'ACCOUNT_DEACTIVATION',
  forgot_password = 'FORGOT_PASSWORD',
  refund_customer = 'REFUND_CUSTOMER',
  calendar_disable = 'CALENDAR_DISABLE',
  update_product = 'UPDATE_PRODUCT',
}

export enum SENDEMAIL {
  SEND = 1,

  EVENT_REMINDER = 'event_reminder',
  WEEKLY_SUMMARY = 'weekly_summary',
  ADDED_TO_BUDGET = 'added_to_budget',
  BOOKING_CONFIRMATION = 'booking_confirmation',
  ADDED_TO_CART = 'added_to_cart',
  PAYMENT_FAILED = 'payment_failed',
  PAYMENT_METHOD_ERROR = 'payment_method_errors',
  SIGNIN_ACTIVITY = 'sign_in_activity',
  ACCOUNT_DEACTIVATION = 'account_deactivation',
  FORGOT_PASSWORD = 'forgot_password',
}
