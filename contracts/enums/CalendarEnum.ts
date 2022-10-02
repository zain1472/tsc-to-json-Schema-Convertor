export enum CalendarState {
  PENDING = 'pending',
  REJECTED = 'rejected',
  APPROVED = 'approved',
  UNDERREVIEW = 'under-review',
}

export enum CalendarStatus {
  DRAFT = 'draft',
  LIVE = 'live',
  ARCHIVE = 'archive',
}
export enum CustomerStatus {
  NOT_IN_USE = 'not-in-use',
  IN_USE = 'in-use',
}

export enum CalendarDayHour {
  AVAILABLE = 'available',
  SUGGESTED = 'suggested',
  BLOCKED = 'blocked',
  USED = 'used',
}

export enum Day {
  SUNDAY = 'Sun',
  MONDAY = 'Mon',
  TUESDAY = 'Tue',
  WEDNESDAY = 'Wed',
  THURSDAY = 'Thu',
  FRIDAY = 'Fri',
  SATURDAY = 'Sat',
}

export enum ShowPrice {
  SHOW = 'show',
  HIDE = 'hide',
}
