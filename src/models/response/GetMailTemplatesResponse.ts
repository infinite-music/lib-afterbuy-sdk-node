import { AfterbuyResponse } from "../AfterbuyResponse";
import { MailTemplate } from "../data/MailTemplate";

export interface GetMailTemplatesResponse
  extends AfterbuyResponse<"GetMailTemplates", { MailTemplates: { MailTemplate: MailTemplate[] } }> {}
