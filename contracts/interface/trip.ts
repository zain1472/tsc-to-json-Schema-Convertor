import { DateTime } from 'luxon'

export interface AddTripDTO {
  startDate: DateTime
  endDate: DateTime
  restTimeStart: string
  restTimeEnd: string
  destinations: {
    country: string
    city: string
    full_address: string
  }[]
  travellers: {
    adult: number
    infant: number
    child: number
    youth: number
    senior: number
  }
  adventures?: {
    category: string
    sub_category: string[]
  }[]
}

export enum TripCategory {
  UPCOMING = 'upcoming',
  PAST = 'past',
  CURRENT = 'current',
}
