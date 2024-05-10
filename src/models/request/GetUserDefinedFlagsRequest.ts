import { AfterbuyRequest } from "../AfterbuyRequest";

export interface GetUserDefinedFlagsRequest
  extends AfterbuyRequest<"GetUserDefinedFlags", GetUserDefinedFlagsRequest.DetailLevel> {}

export namespace GetUserDefinedFlagsRequest {
  export enum DetailLevel {
    None = 0,
  }
}
