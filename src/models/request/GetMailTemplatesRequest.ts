import { AfterbuyRequest } from "../AfterbuyRequest";

export interface GetMailTemplatesRequest
  extends AfterbuyRequest<"GetMailTemplates", GetMailTemplatesRequest.DetailLevel> {
  TemplateID?: number;
}

export namespace GetMailTemplatesRequest {
  export enum DetailLevel {
    Base = 0,
    Content = 1 << 1,
  }
}
