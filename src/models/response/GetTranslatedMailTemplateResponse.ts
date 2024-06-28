import { AfterbuyResponse } from "../AfterbuyResponse";

export interface GetTranslatedMailTemplateResponse
  extends AfterbuyResponse<"GetStockIGetTranslatedMailTemplate", { TranslatedMailText: string }> {}
