export interface ProductStock {
  ProductID: number;
  Name: string;
  Anr: number;
  EAN: string;
  AuctionQuantity: number;
  Quantity: number;
  FullFilmentQuantity: number;
  MinimumStock: number;
  Discontinued?: 1 | 0;
  Stock?: 1 | 0;
  MergeStock?: -1 | 1 | 0;
  AvailableShop: number;
  Available: number;
  RealQuantity: number;
}
