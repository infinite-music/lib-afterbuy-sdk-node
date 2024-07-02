import { AfterbuyResponse } from "../AfterbuyResponse";
import { NewProduct } from "../data/NewProduct";

export interface UpdateProductsResponse
  extends AfterbuyResponse<"UpdateProducts", { NewProducts?: { NewProduct: NewProduct[] } }> {}
