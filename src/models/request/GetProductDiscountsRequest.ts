import { AfterbuyRequest } from "../AfterbuyRequest";

export interface GetProductDiscountsRequest
  extends AfterbuyRequest<"GetProductDiscounts", GetProductDiscountsRequest.DetailLevel> {
  ShopId: number;
  FromModificationDate: string;
}

export namespace GetProductDiscountsRequest {
  export enum DetailLevel {
    All = 0,
  }
}
