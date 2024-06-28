import { AfterbuyResponse } from "../AfterbuyResponse";
import { ProductDiscount } from "../data/ProductDiscount";

export interface GetProductDiscountsResponse
  extends AfterbuyResponse<"GetProductDiscounts", { ProductDiscounts: { ProductDiscount: ProductDiscount[] } }> {}
