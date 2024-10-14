import { AfterbuyRequest } from "../AfterbuyRequest";
import { AfterbuyDataFilter } from "../filter/AfterbuyDataFilter";
import { NumberValueFilter, StringValueFilter } from "../filter/ValueFilter";

export interface GetTranslatedMailTemplateRequest
  extends AfterbuyRequest<"GetTranslatedMailTemplate", GetTranslatedMailTemplateRequest.DetailLevel>,
    AfterbuyDataFilter<NumberValueFilter<"TemplateID"> | StringValueFilter<"TemplateName">> {
  OfferID: number;
  UseTemplate?: 1 | 0;
  TemplateText?: string;
}

export namespace GetTranslatedMailTemplateRequest {
  export enum DetailLevel {
    All = 0,
  }
}
