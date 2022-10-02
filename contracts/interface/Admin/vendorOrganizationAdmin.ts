import { VendorStatus } from 'Contracts/enums/VendorEnum'
import { DateTime } from 'luxon'

/**
 * @property {number} page
 * @property {number} perPage
 * @property {date} startDate
 * @property {date} endDate
 * @property {string} searchQuery
 * @property {string} status
 * @property {number} id
 * @property {number} applicationRef
 * @property {number} email
 */

export interface GetAllVendor {
  page: number
  perPage: number
  searchQuery?: string
  status?: VendorStatus
  startDate?: DateTime
  endDate?: DateTime
}

export interface DeleteVendor {
  application_ref: string
  email: string
}
