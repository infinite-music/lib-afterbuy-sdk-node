import { AfterbuyRequest } from "../AfterbuyRequest";
import { AfterbuyDataFilter } from "../filter/AfterbuyDataFilter";
import { NumberValueFilter, StringValueFilter, ValueFilter } from "../filter/ValueFilter";

export interface GetPaymentServicesRequest
  extends AfterbuyRequest<"GetPaymentServices", GetPaymentServicesRequest.DetailLevel>,
    AfterbuyDataFilter<
      StringValueFilter<"Land"> | NumberValueFilter<"ValueOfGoods"> | ValueFilter<"Plattform", "ebay" | "shop">
    > {}

export namespace GetPaymentServicesRequest {
  export enum DetailLevel {
    All = 0,
  }
}
