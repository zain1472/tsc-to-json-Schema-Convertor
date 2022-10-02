interface WebsiteNotification {
  weekly_summary: boolean
  event_reminder: boolean
  booking_confirmation: boolean
  payment_failed: boolean
  payment_method_errors: boolean
  added_to_cart: boolean
  added_to_budget: boolean
}

interface EmailNotification {
  sign_in_activity: boolean
  weekly_summary: boolean
  event_reminder: boolean
  forgot_password: boolean
  booking_confirmation: boolean
  payment_failed: boolean
  account_deactivation: boolean
  payment_method_errors: boolean
}
export interface NotificationSettingsInterface {
  website_notification: WebsiteNotification
  email_notification: EmailNotification
}
