// import { DateTime } from 'luxon'
import { MealType } from 'Contracts/enums/MediaEnum'
import { DateTime } from 'luxon'
import {
  Frequency,
  Month,
  PackageTypeStatus,
  ProductDayTypeStatus,
  ProductTypeStatus,
} from 'Contracts/enums/ProductEnum'
import { BookProductItemWithPriceAndAdminPrice } from './stripe'

/**
 *
 * @property {string} type The type of media. Can be video or image
 * @property {string} url The url of the media
 */

export interface Media {
  type: string
  url: string
}

/**
 * What is provided in an activity.
 * @property {string} category
 * @property {string} title
 */

export interface Inclusion {
  category: string
  title: string
}
/**
 * What isn't provided in an activity.
 * @property {string} category
 * @property {string} title
 * @property {string} reason
 */

export interface Exclusion {
  category: string
  title: string
  reason: string
}

/**
 * @property {object[]} languages
 * @property {boolean} guide_is_certified
 * @property {boolean} guide_as_driver
 */

export interface LanguageOffered {
  languages: Language[]
  guide_is_certified: boolean
  guide_as_driver: boolean
}

/**
 * @property {string} name
 * @property {boolean} in_person
 * @property {boolean} audio
 * @property {boolean} written
 * @property {boolean} guide_is_certified
 * @property {boolean} guide_as_driver
 */
export type Language = {
  name: string
  in_person: boolean
  audio: boolean
  written: boolean
}

/**
 * @property {string} type E.g breakfast, lunch, dinner
 * @property {string} description
 * @property {Media[]} photos_and_videos
 */

export interface Meal {
  type: string
  description: string
  photos_and_videos: Media[]
}

/**
 * @property {string} from start month
 * @property {string} to end month
 * @property {string} reason the reason for this season
 */

export interface CalendarTime {
  from: string
  to: string
  reason: string
}

/**
 * @property {CalendarTime[]} best_time The time an activity can be enjoyed the most.
 * @property {CalendarTime[]} high_season The activities peak period for visitors.
 * @property {CalendarTime[]} best_weather Best weather to visit this activity.
 */

export interface CalendarSeason {
  best_time: CalendarTime[]
  high_season: CalendarTime[]
  best_weather: CalendarTime[]
}

/**
 *
 * @property {string} category
 * @property {string} sub_category
 * @property {string} frequency
 * @property {string} image_url
 */

export interface Sight {
  category: string
  sub_category?: {
    name: string
    frequency: Frequency
    image_url: string
  }[]
  frequency: Frequency
  image_url: string
}

/**
 *
 * @property {Accessibility[]} accessibility A list of accessibility information
 * @property {array} health_restrictions
 * @property {number} difficulty_level
 * @property {string} phone_number
 */

export interface TravellerInformation {
  accessibility: Accessibility[]
  health_restrictions: number[]
  difficulty_level: DIFFICULTYLEVEL
  phone_number: string
}

export enum DIFFICULTYLEVEL {
  EASY = 'easy',
  HARD = 'hard',
  CHALLENGING = 'challenging',
}

/**
 * @property {boolean} wheelchair
 * @property {boolean} stroller
 * @property {boolean} service_animals
 * @property {boolean} public_trans
 * @property {boolean} infant_lapping
 * @property {boolean} infant_seats
 */
export interface Accessibility {
  wheelchair: boolean
  stroller: boolean
  service_animals: boolean
  public_trans: boolean
  infant_lapping: boolean
  infant_seats: boolean
}

/**
 * @typedef {object} Rooms
 * @property {object} pp_sharing For a person sharing a room with another person.
 * @property {object} pp_sharing.double
 * @property {number} pp_sharing.double.double_bed
 * @property {number} pp_sharing.double.large_bed
 * @property {number} pp_sharing.double.xl_double_bed
 * @property {number} pp_sharing.double.sofa_bed
 * @property {number} pp_sharing.double.futon_mat
 * @property {object} pp_sharing.twin
 * @property {number} pp_sharing.twin.single_bed
 * @property {number} pp_sharing.twin.bunk_bed
 * @property {object} pp_single
 * @property {object} pp_single.single
 * @property {number} pp_single.single.bed
 * @property {object} pp_single.double
 * @property {number} pp_single.double.double_bed
 * @property {number} pp_single.double.large_bed
 * @property {number} pp_single.double.xl_double_bed
 * @property {number} pp_single.double.sofa_bed
 * @property {number} pp_single.double.futon_mat
 * @property {number} no_of_bathrooms
 */

export interface Room {
  per_person_sharing: PerPersonSharing // For a person sharing a room with another person.
  per_person_single: PerPersonSingle
  no_of_bathrooms: number
}
export type PerPersonSharing = {
  double: Double
  twin: Twin
}
export type PerPersonSingle = {
  single: Single
  double: Double
}
export type Double = {
  double_bed: number
  large_bed: number
  xl_double_bed: number
  sofa_bed: number
  futon_mat: number
}
export type Single = {
  bed: number
}
export type Twin = {
  single_bed: number
  bunk_bed: number
}

/**
 *
 * @property {array} general
 * @property {array} cooking_and_cleaning
 * @property {array} entertainment
 * @property {array} outside_and_view
 */

export interface Facility {
  general: string[]
  cooking_and_cleaning: string[]
  entertainment: string[]
  outside_and_view: string[]
}

/**
 * @typedef {object} BreakfastDetails
 * @property {number} price
 * @property {array} types List of breakfast types offered. E.g A la carte, american, buffer, etc
 */

export interface BreakfastDetail {
  price: number
  types: string[]
}

/**
 * @property {boolean} smoking_allowed
 * @property {boolean} pets_allowed
 * @property {boolean} events_allowed
 * @property {object} check_in
 * @property {string} check_in.from
 * @property {string} check_in.until
 * @property {object} check_out
 * @property {string} check_out.from
 * @property {string} check_out.until
 */

export interface HouseRules {
  smoking_allowed: boolean
  pets_allowed: boolean
  events_allowed: boolean
  check_in: Check
  check_out: Check
}

export type Check = {
  from: string
  until: string
}

/**
 * @typedef {object} Pricing
 * @property {object[]} age_group
 * @property {string} age_group.type Adult, Senior, etc
 * @property {number} age_group.min_age
 * @property {number} age_group.max_age
 * @property {number} age_group.amount
 * @property {object[]} age_group.group_price
 * @property {number} age_group.group_price.amount
 * @property {number} age_group.group_price.min
 * @property {number} age_group.group_price.max
 * @property {number} min_travellers Minimum number of travellers per booking.
 * @property {number} max_travellers Maximum number of travellers per booking.
 * @property {array} days Days the pricing applies.
 * @property {object} single_supplement
 * @property {number} single_supplement.double
 * @property {number} single_supplement.twin
 * @property {AccomodationPrice} accomodation_price Activity pricing details including accomodation.
 */

export interface Pricing {
  days: string[]
  age_groups: AgeGroup[] | undefined
  min_travellers: number | undefined // Minimum number of travellers per booking.
  max_travellers: number | undefined // Maximum number of travellers per booking.\
  is_accomodation_included: boolean | undefined
  product_accomodation_single_supplement?: SingleSupplement | undefined
  per_person_sharing?: PerPersonSharingPrice

  per_person_single?: PerPersonSinglePrice

  product_peak_season_supplements: PeakSeasonSupplement[] | [] | undefined
  accomodation_peak_season_supplements: PeakSeasonSupplement[] | [] | undefined
  accomodation_group_prices: AccomodationGroupPrice[] | [] | undefined
}

export type PerPersonSharingPrice = {
  double_room: DoubleRoomPrice
  twin_room: TwinRoomPrice
}
export type PerPersonSinglePrice = {
  double_room: DoubleRoomPrice
  twin_room: TwinRoomPrice
}

export type DoubleRoomPrice = {
  amount: number
  single_supplement?: number
}

export type TwinRoomPrice = {
  amount: number
  single_supplement?: number
}

export type PeakSeasonSupplement = {
  percentage: number
  start: DateTime
  end: DateTime
  season: String
}

export type AccomodationGroupPrice = {
  percentage: number
  min: number
  max: number
}

export type AgeGroup = {
  type: string // Adult, Senior, Child, Infant, Youth etc
  min_age: number
  max_age: number
  amount: number
  group_price: GroupPrice[] | undefined
}
export type GroupPrice = {
  amount: number
  min: number
  max: number
}
export type SingleSupplement = {
  double: number
  twin: number
}

/**
 * @property {object} cutoff
 * @property {number} cutoff.time E.g 3600 - 1hour
 * @property {string} cutoff.type Should be travel or activity
 * @property {boolean} receive_notification
 * @property {string} cancellation_policy standard, moderate, strict
 * @property {string[]} custom_policy
 * @property {string[]} extra_information
 * @property {object} ticket
 * @property {string} ticket.type mobile_or_paper and paper
 * @property {string} ticket.number one_per_booking and one_per_traveller
 * @property {string[]} ticket.redemption_locations
 * @property {string} ticket.redemption_instructions
 */

export interface BookingTicketDetail {
  cutoff: Cutoff
  receive_notification: boolean
  cancellation_policy: CancellationPolicy
  custom_policy: string[]
  extra_information: string[]
  ticket: Ticket
}

export type Cutoff = {
  time: number
  time_type: DurationType
  type: string
}
export type Ticket = {
  type: string
  number: string
  redemption_locations: string[]
  redemption_instructions: string
}

export enum CancellationPolicy {
  STANDARD = 'standard',
  MODERATE = 'moderate',
  STRICT = 'strict',
  CUSTOM = 'custom',
}
export enum RefundType {
  FULL = '100%',
  HALF = '50%',
  QUARTER = '25%',
  NoRefund = '0',
}
export enum DurationType {
  DAYS = 'Days',
  HOURS = 'Hours',
  WEEKS = 'Weeks',
  MINUTES = 'Minutes',
}
export interface CreateProduct {
  calendar_id: number
  day_type: ProductDayTypeStatus
  product_type: ProductTypeStatus
  product_category_id: number
  product_sub_category_id: number
}

export interface AddNewProductInPackage {
  day_type: ProductDayTypeStatus
  product_category_id: number
  product_sub_category_id: number
  package_id: number
}

export interface RemoveProductFromPackage {
  product_id: number
  package_id: number
}

export interface AssignExistingPackage {
  calendar_id: number
  package_id: number
  package_type: PackageTypeStatus
}
export interface UnlinkPackage {
  calendar_id: number
  package_id: number
}
export interface AssignExistingProduct {
  calendar_id: number
  product_id: number
  product_type: ProductTypeStatus
}

export interface UnlinkProduct {
  calendar_id: number
  product_id: number
}
export interface GetAllCalenderProduct {
  // calendarId: number
  page?: number
  perPage?: number
  searchQuery?: string
  productCategory?: string
}
export interface SwitchProductType {
  calendar_id: number
  product_id: number
  product_type: ProductTypeStatus
}

export interface CreatePackage {
  calendar_id: number
  title: string
  description: string
  is_main_product: boolean
}

export interface UpdateProductMealsAndDrinks {
  id: number
  meals_and_drinks: MealsDrinks[]
}

//type url
export interface MealsDrinks {
  type: MealType
  other_type?: string
  description: string
  photos_and_videos: Media[]
}

export interface UpdateProductLanguageOffer {
  id: number
  language_offers: {
    is_language_offered: boolean
    languages: Language[]
    guide_is_certified: boolean
    guide_as_driver: boolean
  }
}

export interface UpdateProductInclusion {
  id: number
  inclusions: Inclusion[]
}

export interface UpdateProductExclusion {
  id: number
  exclusions: Inclusion[]
}

export interface UpdateProductLanguageOffer {
  id: number
  language_offers: {
    is_language_offered: boolean
    languages: Language[]
    guide_is_certified: boolean
    guide_as_driver: boolean
  }
}

interface FromTo {
  from: Month
  to: Month
  reason: string
}
export interface UpdateProductCalendarSeason {
  id: number
  calendar_season: {
    best_time: FromTo[]
    high_season: FromTo[]
    best_weather: FromTo[]
  }
}

export interface UpdateProductCalendarDay {
  id: number
  calendar_days: string
}

export interface CalendarDay {
  calendar_days: number[] // 1 = Monday, Tuesday = 2 ...
  calendar_specific_day: number // allow if day_type = within_day
}

export interface BookingTimePeriod {
  type: TimeType // 1 Suggest a Specific Time Only
  time_period: TimePeriod
}

export interface BookingTimePeriod {
  type: TimeType // 2 Allow customers to choose within a time period in the day (only)
  within_time_periods: TimePeriod[]
  duration: string
}

export interface BookingTimePeriod {
  type: TimeType // 3 Suggest a specific time & Allow customers to choose within a time period in the day
  time_period: TimePeriod
  within_time_periods: TimePeriod[]
  duration: string // The duration of the activity in milliseconds. Applies to products that are available within the day only.
}

export interface SpecificTime {
  type: TimeType
  time_period: TimePeriod
}

/**
 * Time a customer can be allowed to book a product.
 *
 * @property {string} from The time should be in this format - 09:00
 * @property {string} to The time should be in this format - 09:00
 */
export interface TimePeriod {
  from: string
  to: string
}

export enum TimeType {
  Specific_Time = 'specific_time',
  Within_Time_Period = 'within_time_period',
  Both = 'both',
}

export interface UpdateProductPersonalInfo {
  id: number
  title: string
  description: string
  address: string
  city: string
  country: string
  start_time?: string
  finish_time?: string
  photos_and_videos: Media[]
  spaces_available: number
  calendar_id: number
}

export interface UpdateProductBookingTimePeriods {
  id: number
  booking_time_periods: BookingTimePeriod
}

export interface UpdateProduct extends CreateProduct {
  id: number
}

type Adventure = {
  category: string
  sub_category: string[]
}
export interface UpdateProductAdventure {
  id: number
  adventures: Adventure[]
}

export interface UpdateProductSight {
  id: number
  sights: Sight[]
}

export interface UpdateProductMeetupPoint {
  id: number
  meetup_info: MeetupInfo
}

type MeetupInfo = {
  at_accommodation: boolean | undefined
  at_starting_point: boolean | undefined
  allow_users_to_enter_pickup_location: boolean | undefined
  points: string[] | undefined
}

type RoomTwin = {
  single_bed: number
  bunk_bed: number
}
export interface UpdateProductRoom {
  id: number
  rooms: {
    pp_sharing: {
      double: Double
      twin: RoomTwin
    }
    pp_single: {
      single: Single
      double: Double
    }
    no_of_bathrooms: number
  }
}
export interface UpdateProductFacility {
  id: number
  facilities: {
    general?: string[]
    cooking_and_cleaning?: string[]
    entertainment?: string[]
    outside_and_view?: string[]
  }
}

export interface UpdateProductBreakfastDetail {
  id: number
  breakfast_details: {
    is_breakfast_serve: boolean
    is_price_include: boolean
    price: number
    types: string[]
  }
}
export interface UpdateProductHouseRule {
  id: number
  house_rules: HouseRules
}

export interface UpdateProductCovid19Update {
  id: number
  covid_19_updates: {
    covid_info: string[]
    description?: string
  }
}

export interface UpdateProductTravellerInformation {
  id: number
  traveller_information: {
    accessibility: Accessibility
    health_restrictions: string[]
    difficulty_level: {
      type: string
      content: string
    }
    phone_number: string
  }
}

export interface UpdateProductPricing {
  id: number
  prices: Pricing[]
}
export interface UpdateProductsBookingTicketDetails {
  id: number
  booking_ticket_details: {
    customer_can_process_refund: boolean
    confirm_before_refund_is_processed?: boolean
    cut_off: Cutoff
    policy: {
      type: CancellationPolicy
      content?: {
        refund_type: string
        duration: number
        duration_type: DurationType
      }
    }
    custom_policy?: string[]
    traveler_information: {
      first_name: boolean
      email: boolean
      full_name?: boolean
      weights?: boolean
      heights?: boolean
      date_of_birth?: boolean
      passport_details?: boolean
      phone_number?: boolean
    }
    ticket_setup: {
      ticket_type: string
      ticket_per_booking: string
      ticket_redemption: {
        entry_ticket: string
        redemption_instructions?: string
      }
      preview_tickets: {
        type: string
        company_logo: string
      }
    }
    send_email?: boolean
  }
}

export interface UpdateProductInformation {
  id: number
  is_admission_included?: string
  departure_time?: string
  departure_pickup_duration?: string
  book_activity_without_accomodation?: boolean
  meetup_info?: MeetupInfo | undefined
}

export interface CreatePackageProduct {
  calendar_id: number
  day_type: ProductDayTypeStatus
  product_type: ProductTypeStatus
  product_category_id: number
  product_sub_category_id: number
}

export interface AttatchExistingAddonProduct {
  product_id: number
  calendar_id: number
}
export interface ProductRetailPriceCalculation {
  status: number
  type?: string
  max_age?: number
  min_age?: number
  vendor_price?: number
  retail_price?: number
  travel_jinni_commission?: number
  customer_calendar_commission?: number
  loyalty_point_allocation?: number
  transaction_fee?: number
}
export interface CheckProductAndCalculateAmountResult {
  newProductItems: BookProductItemWithPriceAndAdminPrice[]
  vendorOrganizationId: string | number
  vendorPrice: number
  retailPrice: number
  travelJinniCommission: number
  customerCalendarCommission: number
  loyaltyPointAllocation: number
  transactionFee: number
}
export interface CheckCartAndCalculateAmountResult {
  newCartItems: BookProductItemWithPriceAndAdminPrice[]
  vendorOrganizationId: string | number
  vendorPrice: number
  retailPrice: number
  travelJinniCommission: number
  customerCalendarCommission: number
  loyaltyPointAllocation: number
  transactionFee: number
}
