import { AdditionalDescriptionField } from "./AdditionalDescriptionField";

export interface AdditionalDescriptionFieldUpdate extends Partial<AdditionalDescriptionField> {
  FieldIDIdent?: number;
  FieldNameIdent?: string;
}
