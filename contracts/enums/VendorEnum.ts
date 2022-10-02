export enum VendorStatus {
  ON_WAITING_LIST = 'on_waiting_list',
  PENDING = 'pending',
  APPROVED = 'approved',
}

export enum MainServiceStatus {
  ToursActivities = 'Tours/Activities',
  Accomodation = 'Accomodation',
  RestaurantServiceOrMealsAndDrinks = 'Restaurant service or Meals & Drinks',
  PersonalCare = 'Personal Care',
  Guide = 'Guide',
  Other = 'Other',
}

export enum VendorDateStatus {
  TODAY = 'today',
  YESTERDAY = 'yesterday',
  WEEK_TO_DATE = 'week_to_date',
  LAST_WEEK = 'last_week',
  MONTH_TO_DATE = 'month_to_date',
  LAST_MONTH = 'last_month',
  LAST_3_MONTHS = 'last_3_months',
  LAST_6_MONTHS = 'last_6_months',
  YEAR_TO_DATE = 'year_to_date',
  LAST_YEAR = 'last_year',
  ALL_TIME = 'all_time',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
  CUSTOM_RANGE = 'custom_range',
}
