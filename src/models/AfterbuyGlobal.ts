export interface AfterbuyGlobal<CallName extends string, DetailLevel extends number = 0> {
  PartnerToken: string;
  AccountToken: string;
  CallName: CallName;
  DetailLevel: DetailLevel;
  ErrorLanguage?: string;
}
