import { FinanceStatus } from 'Contracts/enums/FinanceEnum'
// import { DateTime } from 'luxon'

export interface GetFinances {
  // calendarId: number
  page?: number
  perPage?: number
  searchQuery?: string
  FinanceStatus: FinanceStatus
}
