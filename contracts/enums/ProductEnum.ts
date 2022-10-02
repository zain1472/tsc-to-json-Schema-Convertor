export enum ProductDayTypeStatus {
  ALLDAY = 'all_day',
  WITHINDAY = 'within_day',
}
export enum ProductTypeStatus {
  MAINPRODUCT = 'main_product',
  ADDONPRODUCT = 'addon_product',
  PACKAGEPRODUCT = 'package_product',
  MAINPACKAGEPRODUCT = 'main_package_product',
  PACKAGE = 'package',
}

export enum PackageTypeStatus {
  MAINPRODUCT = 'main_product',
  ADDONPRODUCT = 'addon_product',
}

export enum ProductStatus {
  IN_USE = 'in_use',
  NOT_IN_USE = 'not_in_use',
  STOPPED = 'stopped',
  CANCELLED = 'cancelled',
  PAUSED = 'paused',
  ARCHIVED = 'archived',
}

export enum Month {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}

export enum Frequency {
  Common = 'Common',
  Occasional = 'Occasional',
  Rare = 'Rare',
}

export enum ShareSingle {
  Share = 'Share',
  Single = 'Single',
}

export enum CategoryProduct {
  Accomodation = 'Accomodation',
  Activity = 'Activity',
}

export enum AvailabilityEnum {
  Main = 'main',
  Specific = 'specific',
}

export enum PaymentTypes {
  PRODUCT_PAYMENT = 'product_payment',
  CALENDAR_PAYMENT = 'calendar_payment',
  SUBSCRIPTION_PAYMENT = 'subscription_payment',
  TOPUP_PAYMENT = 'topup-payment',
}
