import { AfterbuyRequest } from "../AfterbuyRequest";
import { ProductUpdate } from "../data/ProductUpdate";

export interface UpdateProductsRequest extends AfterbuyRequest<"UpdateProducts", UpdateProductsRequest.DetailLevel> {
  Products: { Product: ProductUpdate[] };
}

export namespace UpdateProductsRequest {
  export enum DetailLevel {
    None = 0,
  }
}
