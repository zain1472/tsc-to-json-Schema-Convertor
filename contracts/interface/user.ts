import { BusinessType } from 'Contracts/enums/StripeAccountType'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VendorOrganization from 'App/Models/VendorOrganization'

export interface VendorOnboard {
  photo_url: string
  nick_name: string
  accept_terms: boolean
  job_title: string
  customer_service_email: string
  customer_service_phone_number: string
  country_code: string
}

export interface UpdateUserProfile {
  photo_url: string
  nick_name: string
  first_name: string
  last_name: string
  email: string
  job_title: string
  govt_photo_url?: string[]
}
export interface CreateBankinformation {
  user_id: number
  business_type: BusinessType
  account_address: string
  account_state: string
  account_zip_code: string
  account_city: string
  account_country: string
  account_contact: string
}

export interface CustomContextContract extends HttpContextContract {
  vendorUser: VendorOrganization
}
