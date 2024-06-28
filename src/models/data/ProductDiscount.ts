export interface ProductDiscount {
  ShopId: number;
  DiscountActive: boolean;
  ControlId: number;
  PriceType: string;
  NewPriceType: string;
  StartDate: string;
  ExpireDate: string;
  Type: number;
  DiscountPercent: number;
  SavedAmount: number;
  DiscountedPrice: number;
  Quantity: number;
}
