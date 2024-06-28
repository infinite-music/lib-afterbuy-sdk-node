import { AfterbuyResponse } from "../AfterbuyResponse";
import { ProductStock } from "../data/ProductStock";

export interface GetStockInfoResponse
  extends AfterbuyResponse<"GetStockInfo", { Products: { Product: ProductStock[] } }> {}
