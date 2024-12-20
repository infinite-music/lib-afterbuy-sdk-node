import { AfterbuyRequest } from "../AfterbuyRequest";
import { ShopProductUpdate } from "../data/ShopProductUpdate";

export interface UpdateShopProductsRequest
  extends AfterbuyRequest<"UpdateShopProducts", UpdateShopProductsRequest.DetailLevel> {
  Products: { Product: ShopProductUpdate[] };
}

export namespace UpdateShopProductsRequest {
  export enum DetailLevel {
    None = 0,
  }
}
