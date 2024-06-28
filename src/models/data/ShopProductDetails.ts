import { BaseProductData } from "./BaseProductData";

export interface ShopProductDetails {
  ProductID: number;
  EAN: string;
  Anr: number;
  UnitOfQuantity: string;
  BasepriceFactor: number;
  BaseProductData: BaseProductData;
}
