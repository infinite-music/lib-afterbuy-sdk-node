import { BaseProductType } from "./BaseProduct";

export interface ProductIdent {
  ProductInsert?: 1 | 0;
  BaseProductType?: BaseProductType;
  UserProductID?: string;
  ProductID?: number;
  Anr?: number;
  EAN?: string;
}
