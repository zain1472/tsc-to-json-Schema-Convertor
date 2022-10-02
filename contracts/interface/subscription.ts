export interface CheckCalendarUUID {
  calendarUuid: string
}

export interface ChangeVendorSubscription {
  plan_id: number
  selected_calendar_ids: number[]
}
