import { ReminderFrequency, ReminderType } from 'Contracts/enums/CartEnum'
import { DateTime } from 'luxon'

export interface CreateCartDTO {
  productId: number
  quantity: number
  price: number
  timeline_date: DateTime
  age_group: AgeGroup[]
  bought: boolean
  calendar_id: number
  start_time?: string
  finish_time?: string
  reminder_type?: ReminderType
  reminder_value?: number
  reminder_repeat?: ReminderFrequency
  from?: string
}

export interface UpdateCartDTO {
  quantity: number
  price: number
  age_group: AgeGroup[]
  reminder_type?: ReminderType
  reminder_value?: number
  reminder_repeat?: ReminderFrequency
}

export interface AgeGroup {
  type: string
  count: number
}
