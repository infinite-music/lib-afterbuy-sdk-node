import { AfterbuyResponse } from "../AfterbuyResponse";
import { NewProduct } from "../data/NewProduct";

export interface UpdateShopProductsResponse
  extends AfterbuyResponse<"UpdateShopProducts", { NewProducts?: { NewProduct: NewProduct[] } }> {}
