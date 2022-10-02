import { BookProductEntity } from 'Contracts/enums/BookingEnum'

export interface CreateAccountData {
  s_token: string
  booking_id: number
  amount: number
  description: string
}

export interface StripePaginateDto {
  lastId?: string
  perPage: number
}
export interface PaginateDto {
  page: number
  perPage: number
}
export interface BookProductItem {
  id: number
  qty: number
  entity: BookProductEntity
}
export interface BookProductItemWithPriceAndAdminPrice {
  id: number
  qty: number
  entity: BookProductEntity
  vendor_price: number
  retail_price: number
  max: number
  min: number
  travel_jinni_commission: number
  customer_calendar_commission: number
  loyalty_point_allocation: number
  transaction_fee: number
}

/**
 * @property {string} destination
 */
type TransferData = {
  destination: string
}

/**
 *
 * @property {array} payment_method_types
 * @property {number} amount
 * @property {string} currency
 * @property {number} application_fee_amount
 * @property {object} transfer_data
 */

export interface CreateCharge {
  payment_method_type: string
  payment_method?: string
  vendor_organisation_id: string
  amount: number
  cart_items: BookProductItemWithPriceAndAdminPrice[]
  currency: string
  calendar_id: number
  application_fee_amount: number
  total_vendor_price: number
  total_retail_price: number
  total_travel_jinni_commission: number
  total_ccm_commission: number
  total_loyalty_point_allocation: number
  total_transaction_fee: number
  transfer_data: TransferData
}

/**
 *
 * @property {number} customer_id
 * @property {number} booking_id
 * @property {string} charge_id
 * @property {number} amount
 * @property {number} admin_fee
 * @property {string} payment_method
 * @property {string} status
 * @property {object} payment_log
 */
export interface SaveTransactions {
  customer_id?: number
  booking_id?: number
  calendar_id?: number
  charge_id?: string
  payment_id?: string
  amount: number
  admin_fee: number
  vendor_price?: number
  vendor_recieved_price?: number
  payment_method: string
  status: string
  payment_log: object
  stripe_id?: string
  platform: string
  metadata?: object
  currency?: string
}

export interface ConfirmCharge {
  client_secret: string
  payment_method: string
}

export interface StripeEventBody {
  body: string | Buffer
}

export interface CreateTJCharge {
  payment_method_type: string
  amount: number
  calendar_id: number
  currency: string
  application_fee_amount: number
}
export interface CollectedFees {
  stripe_id: string
  charge_id: string
  admin_charge: number
  metadata: string
}
