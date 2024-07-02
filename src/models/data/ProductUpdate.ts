import { ShopProduct } from "./ShopProduct";
import { ProductIdent } from "./ProductIdent";

export interface ProductUpdate extends ShopProduct {
  ProductIdent: ProductIdent;
}
