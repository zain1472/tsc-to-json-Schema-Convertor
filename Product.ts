export interface Customer {
  date: string;

  product_id: number;

  calendar_id: number;

  sold_out: boolean;

  spaces_left: number;

  spaces_left_limit: number;

  travel_jinni_sold: number;

  travel_jinni_sold_percentage: number;

  product_limit_exceed: number;

  maximum_slots: number;
}
