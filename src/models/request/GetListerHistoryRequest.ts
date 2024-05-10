import { AfterbuyRequest } from "../AfterbuyRequest";

export interface GetVersionRequest extends AfterbuyRequest<"GetVersion", GetVersionRequest.DetailLevel> {}

export namespace GetVersionRequest {
  export enum DetailLevel {
    None = 0,
    Base = 1 << 1,
    CategoryAssignment = 1 << 2,
    Description = 1 << 3,
  }
}
