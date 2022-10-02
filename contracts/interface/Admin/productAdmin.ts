import { DateTime } from 'luxon'
import { ProductStatus, ProductTypeStatus } from 'Contracts/enums/ProductEnum'

/**
 * @property {number} page
 * @property {number} perPage
 * @property {date} startDate
 * @property {date} endDate
 * @property {string} searchQuery
 * @property {string} productType
 * @property {number} productCategory
 * @property {number} productSubCategory
 * @property {string} status
 * @property {number} id
 */

export interface GetAllProducts {
  page: number
  perPage: number
  startDate?: DateTime
  endDate?: DateTime
  searchQuery?: string
  productType?: ProductTypeStatus
  status?: ProductStatus
  productCategory?: number
  productSubCategory?: number
}
