import { AfterbuyRequest } from "../AfterbuyRequest";

export interface GetStockInfoRequest extends AfterbuyRequest<"GetStockInfo", GetStockInfoRequest.DetailLevel> {
  Products: {
    Anr?: number;
    ProductID?: number;
    EAN?: string;
  }[];
}

export namespace GetStockInfoRequest {
  export enum DetailLevel {
    NoAvailability = 0,
    AvailabilityShop = 1 << 1,
    AvailabilityAB = 1 << 2,
    RealStock = 1 << 3,
  }
}
