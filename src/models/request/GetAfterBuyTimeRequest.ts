import { AfterbuyRequest } from "../AfterbuyRequest";

export interface GetAfterBuyTimeRequest
  extends AfterbuyRequest<"GetAfterbuyTime", GetAfterBuyTimeRequest.DetailLevel> {}

export namespace GetAfterBuyTimeRequest {
  export enum DetailLevel {
    None = 0,
  }
}
