import { AfterbuyError, AfterbuyErrorResponse } from "../models";

export class AfterbuyException<CallName extends string> extends Error {
  public readonly CallStatus: AfterbuyErrorResponse<CallName>["Afterbuy"]["CallStatus"];
  public readonly CallName: CallName;
  public readonly Errors: AfterbuyError[];

  constructor(public readonly responseRaw: string, public readonly response: AfterbuyErrorResponse<CallName>) {
    const {
      Afterbuy: { CallName, CallStatus, Result },
    } = response;

    super(`Afterbuy API call ${CallName} failed with ${CallStatus} status`);

    this.CallStatus = CallStatus;
    this.CallName = CallName;
    this.Errors = Result.ErrorList?.Error ?? [];
  }
}
