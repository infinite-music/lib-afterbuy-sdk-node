import { AfterbuyRequest } from "../AfterbuyRequest";

export interface GetShippingCostRequest extends AfterbuyRequest<"GetShippingCost", GetShippingCostRequest.DetailLevel> {
  ShippingInfo: {
    ProductID?: number;
    ShippingCountry?: string;
    ItemsCount: number;
    ItemsWeight: number;
    ShippingGroup?: number;
    ItemsPrice: number;
    PostalCode?: string;
    Products?: { ProductID: number[] };
  };
}

export namespace GetShippingCostRequest {
  export enum DetailLevel {
    None = 0,
  }
}
