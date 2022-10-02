import { float } from 'aws-sdk/clients/lightsail'
import { PaymentTypes } from 'Contracts/enums/ProductEnum'

export interface Initialize {
  amount: number
  reference: string
  email: string
  redirectUrl?: string
  subaccount?: string
  transaction_charge?: number
  bearer?: string
  metadata: {
    cart_ids?: any
    number_of_tokens?: number
    plan_id?: number
    user_id: number
    vendor_organisation_id?: string | number
    type: PaymentTypes
    description: string
  }
}

export interface CreateSubAccount {
  business_name: string
  bank_code: number
  account_number: string
  percentage_charge: float
}
