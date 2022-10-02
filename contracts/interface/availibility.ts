import { DateTime } from 'luxon'
import { ProductStatus } from 'Contracts/enums/ProductEnum'
// import { GroupStatus } from 'Contracts/enums/AvailabilityEnum'

/**
 * @property {number} page
 * @property {number} perPage
 * @property {date} dateQuery
 * @property {string} searchQuery
 * @property {number} productCategoryId
 * @property {number} productSubCategoryId
 * @property {string} productStatus
 * @property {string} availabilityStatus
 * @property {number} id
 * @property {number} productId
 * @property {number} maxDailyAvailability
 */

export interface CreateAvailibility {
  productId: number
}

export interface GetAllAvailibiltyProducts {
  page: number
  perPage: number
  dateQuery?: DateTime
  startTime?: DateTime
  endTime?: DateTime
  searchQuery?: string | number
  productCategoryId?: number
  productSubCategoryId?: number
  calendarId?: number
  productStatus?: ProductStatus
  // availabilityStatus?: GroupStatus
}

export interface UpdateSpecificSpacesAvailable {
  id: number
  spacesAvailable: number
  duration?: number
  startTime?: string
  endTime?: string
  dateQuery?: DateTime
}
export interface UpdateAllSpacesAvailable {
  id: number
  spacesAvailable: number
  duration?: number
  startTime?: string
  endTime?: string
  dateQuery?: string
}

export interface UpdateAllAccessSlot {
  id: number
  spacesAvailable: number
}

export interface GetAllArchivedProducts {
  page: number
  perPage: number
  searchQuery?: string | number
  productCategoryId?: number
}

export interface GetCalendarsByProduct {
  id: number
  page: number
  perPage: number
  dateQuery: DateTime
  startTime?: DateTime
  endTime?: DateTime
}

export interface UpdateSpecificCalendarAccess {
  id: number
  productId: number
  calendarAccess: number
  dateQuery?: DateTime
}
