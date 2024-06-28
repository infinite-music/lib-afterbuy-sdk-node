export interface AfterbuyGlobal<CallName extends string, DetailLevel extends number = 0> {
  CallName: CallName;
  DetailLevel: DetailLevel;
  ErrorLanguage?: string;
}

export interface AfterbuyGlobalFull<CallName extends string, DetailLevel extends number = 0>
  extends AfterbuyGlobal<CallName, DetailLevel> {
  PartnerToken: string;
  AccountToken: string;
}
