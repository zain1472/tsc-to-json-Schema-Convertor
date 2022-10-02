import Product from 'App/Models/Product'
import { EventType, SecuredEventType, TimelineEventType } from 'Contracts/enums/TimelineEnums'
import { DateTime } from 'luxon'

export interface UpdateRestingTimeDTO {
  date: DateTime
  calendar_id: number
  rest_time_start: string
  rest_time_end: string
}

export interface TimelineDTO {
  id?: number
  uuid?: string
  secured?: boolean
  booked?: boolean
  addedToPlan?: boolean
  customEvent?: boolean
  eventType?: TimelineEventType
  cityName?: string
  title?: string
  address?: string
  date: Date
  startTime?: string | Date
  endTime?: string | Date
  productSlideImages?: string
  events?: string
  selectedCategory?: {}
}

export interface ExploreTimelineDataDTO {
  id?: number
  uuid?: string
  eventType?: EventType | TimelineEventType
  cityName?: string
  title?: string
  address?: string
  date: Date
  startTime?: string | Date
  endTime?: string | Date
  productSlideImages?: string
  events?: string
  selectedCategory?: {}
}

export interface SecuredEventsDTO extends Product {
  id: number
  title: string
  city: string
  events: any
  address: string
  photosAndVideos: string
  securedEventType: SecuredEventType
  start_time: string
  finish_time: string
}

export interface ExploreEventsDTO extends Product {
  id: number
  title: string
  city: string
  events: any
  address: string
  photosAndVideos: string
  start_time: string
  finish_time: string
  eventType: TimelineEventType
}
export interface ExtendCalendarDurationDTO {
  calendar_id: number
  days: number
  action: ExtendDateAction
}

export enum ExtendDateAction {
  ADD = 'add',
  SUBTRACT = 'subtract',
}

export interface ExploreTimelineDTO {
  calendar_id: number
  adventure?: {
    category: string
    sub_category: string[]
  }
  sights?: {
    category: string
    sub_category: string[]
  }
  cities?: string[]
}
