import { CustomerActiveStatus } from 'Contracts/enums/UserEnum'
import { DateTime } from 'luxon'

export interface GetAllCustomers {
  page: number
  perPage: number
  status?: CustomerActiveStatus
  startDate?: DateTime
  endDate?: DateTime
}
