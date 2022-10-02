export interface CreateQuoteDTO {
  sourceCurrency: string
  targetCurrency: string
  sourceAmount: number
  targetAmount?: number
  profile: number
}
export interface CreateBusinessDTO {
  profile: number
}
