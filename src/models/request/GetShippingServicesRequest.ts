import { AfterbuyRequest } from "../AfterbuyRequest";

export interface GetShippingServicesRequest
  extends AfterbuyRequest<"GetShippingServices", GetShippingServicesRequest.DetailLevel> {}

export namespace GetShippingServicesRequest {
  export enum DetailLevel {
    All = 0,
    GroupNamesDispatchIds = 1 << 1,
    DispatchIds = 1 << 2,
  }
}
