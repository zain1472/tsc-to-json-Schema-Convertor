import { ProductDayTypeStatus } from 'Contracts/enums/ProductEnum'
import { DateTime } from 'luxon'

export interface CreateCustomEventDTO {
  id?: number
  calendarId: number
  startTime: DateTime
  finishTime: DateTime
  country: string
  city: string
  date?: DateTime // when the custom events is created from a timeline i.e sirectly attached to a day
  reservationType: ReservationType
  events: { title: string; value: any }[]
}

export enum ReservationType {
  hotels = 'hotels',
  car_rental = 'car_rental',
  travel_flight = 'travel_flight',
  travel_train = 'travel_train',
  travel_bus = 'travel_bus',
  travel_ferry = 'travel_ferry',
  travel_shuttle = 'travel_shuttle',
  travel_others = 'travel_others',
  attraction = 'attraction',
  others = 'others',
}

export const ReservationTypeWithCategory = [
  {
    reservation_type: ReservationType.hotels,
    category: 'Accommodation',
    sub_category: 'Hotel',
    day_type: ProductDayTypeStatus.ALLDAY,
  },
  {
    reservation_type: ReservationType.car_rental,
    category: 'Transportation',
    sub_category: 'Car Rental',
    day_type: ProductDayTypeStatus.ALLDAY,
  },
  {
    reservation_type: ReservationType.travel_flight,
    category: 'Transportation',
    sub_category: 'Flight',
    day_type: ProductDayTypeStatus.ALLDAY,
  },
  {
    reservation_type: ReservationType.travel_ferry,
    category: 'Transportation',
    sub_category: 'Ferry',
    day_type: ProductDayTypeStatus.ALLDAY,
  },
  {
    reservation_type: ReservationType.travel_bus,
    category: 'Transportation',
    sub_category: 'Bus',
    day_type: ProductDayTypeStatus.ALLDAY,
  },
  {
    reservation_type: ReservationType.travel_shuttle,
    category: 'Transportation',
    sub_category: 'Shuttle',
    day_type: ProductDayTypeStatus.ALLDAY,
  },
  {
    reservation_type: ReservationType.travel_train,
    category: 'Transportation',
    sub_category: 'Train',
    day_type: ProductDayTypeStatus.ALLDAY,
  },
  {
    reservation_type: ReservationType.travel_others,
    category: 'Transportation',
    sub_category: 'Others',
    day_type: ProductDayTypeStatus.ALLDAY,
  },
  {
    reservation_type: ReservationType.attraction,
    category: 'Activity',
    sub_category: 'Itinerary',
    day_type: ProductDayTypeStatus.WITHINDAY,
  },
  {
    reservation_type: ReservationType.others,
    category: 'Others',
    sub_category: 'Others',
    day_type: ProductDayTypeStatus.ALLDAY,
  },
]
