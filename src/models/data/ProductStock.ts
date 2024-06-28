export interface ProductStock {
  ProductID: number;
  Name: string;
  Anr: number;
  EAN: string;
  AuctionQuantity: number;
  Quantity: number;
  FullFilmentQuantity: number;
  MinimumStock: number;
  Discontinued: boolean;
  Stock: boolean;
  MergeStock: boolean;
  AvailableShop: number;
  Available: number;
  RealQuantity: number;
}
