import { DateTime } from 'luxon'
import { CalendarState, CalendarStatus, CustomerStatus } from 'Contracts/enums/CalendarEnum'

/**
 * @property {number} page
 * @property {number} perPage
 * @property {string} searchQuery
 * @property {date} startDate
 * @property {date} endDate
 * @property {string} status
 * @property {string} calendarStatus
 * @property {string} customerStatus
 * @property {number} id
 */

export interface GetAllCalendar {
  page: number
  perPage: number
  searchQuery?: string
  calendarRefQuery?: string
  startDate?: DateTime
  endDate?: DateTime
  status?: CalendarState
  calendarStatus?: CalendarStatus
  customerStatus?: CustomerStatus
}
