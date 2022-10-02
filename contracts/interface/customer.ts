import { UserType } from 'Contracts/enums/UserEnum'
import { DateTime } from 'luxon'

export interface CreateCustomerDTO {
  firstName: string
  lastName: string
  email: string
  calendarId: string
  startDate: DateTime
  endDate: DateTime
  paid_by?: UserType
}

export interface CreateCustomerUserAccountDTO {
  firstName: string
  lastName: string
  email: string
  calendarId: string
  startDate: DateTime
  endDate: DateTime
  password: string
  paid_by?: UserType
}

export interface OnboardCustomerDTO {
  firstName: string
  lastName: string
  email: string
  calendarId: string
  startDate: DateTime
  endDate: DateTime
  password?: string
  paid_by?: UserType
}

export interface WaitingListDTO {
  firstName: string
  lastName: string
  email: string
}

export interface CreateCustomerBySocialAuthDTO {
  firstName: string
  lastName: string
  email: string
  calendarId: string
  startDate: DateTime
  endDate: DateTime
  access_token: string
  paid_by?: UserType
}

export interface SocialSignUpAuthDTO {
  firstName: string
  lastName: string
  email: string
  calendarId: string
  startDate: DateTime | any
  endDate: DateTime | any
  access_token: string
  paid_by?: UserType
}
export interface SocialSignInAuthDTO {
  firstName: string
  lastName: string
  email: string
  calendarId: string | undefined
  startDate: DateTime | any
  endDate: DateTime | any
  access_token: string
  paid_by?: UserType
}

export interface ValidateUserEmailAndCalendarDTO {
  calendar_id: string
}

export interface ForgetPasswordDTO {
  email: string
}

export interface ChangePasswordDTO {
  new_password: string
  email: string
}

export interface ChangeUserPasswordDTO {
  password: string
  old_password: string
}
export interface UpdateCustomerProfileDTO {
  first_name?: string
  last_name?: string
  photo_url?: string
  contact_number?: string
  additional_details_from_google?: object
  additional_details_from_facebook?: object
  language?: string
  currency?: string
  phone_code?: string
}

export interface ValidateCalendarIdAndVendorId {
  calendar_id: string
  vendor_id: number
}

export interface ValidateVendorId {
  vendor_id: number
}

export interface VendorTimelineDTO {
  calendar_uuid: string
  start_date: DateTime
  end_date: DateTime
}
