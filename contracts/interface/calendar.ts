import {
  CalendarStatus,
  CustomerStatus,
  CalendarState,
  Day,
  ShowPrice,
} from 'Contracts/enums/CalendarEnum'

export interface CreateCalendar {
  title: string
  calendar_ref: string | undefined
  no_of_days: number
  no_of_weeks: number
  rest_time_start: string
  rest_time_end: string
  start_day: Day | undefined
  show_price?: ShowPrice
}

export interface UpdateCalendarLength {
  no_of_weeks: number
  no_of_days: number
}

export interface UpdateCalendarRestingTime {
  rest_time_start: string
  rest_time_end: string
}

export interface DuplicateCalendar {
  no_of_weeks: number
  no_of_days: number
}

export interface UpdateCalendarStatus {
  status: CalendarStatus
}

export interface GetAllCalendars {
  page?: number
  perPage?: number
  status?: CalendarState
  searchQuery?: string
  calendarStatus?: CalendarStatus
  customerStatus?: CustomerStatus
  calendarRef?: string
  ratings?: number
}
