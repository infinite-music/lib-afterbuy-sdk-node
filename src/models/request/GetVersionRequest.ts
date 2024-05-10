import { AfterbuyRequest } from "../AfterbuyRequest";

export interface GetVersionRequest extends AfterbuyRequest<"GetVersion", GetVersionRequest.DetailLevel> {}

export namespace GetVersionRequest {
  export enum DetailLevel {
    None = 0,
  }
}
