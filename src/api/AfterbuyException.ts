import { AfterbuyError, AfterbuyErrorResponse, AfterbuyResponse } from "../models";
import { AfterbuyApiResponse } from "./AfterbuyApiResponse";

export class AfterbuyException<CallName extends string, T extends AfterbuyErrorResponse<CallName>> extends Error {
  public readonly CallStatus: AfterbuyErrorResponse<CallName>["Afterbuy"]["CallStatus"];
  public readonly CallName: CallName;
  public readonly Errors: AfterbuyError[];

  constructor(public readonly response: AfterbuyApiResponse<T>) {
    const {
      data: {
        Afterbuy: { CallName, CallStatus, Result },
      },
    } = response;

    super(`Afterbuy API call ${CallName} failed with ${CallStatus} status`);

    this.CallStatus = CallStatus;
    this.CallName = CallName;
    this.Errors = Result.ErrorList?.Error ?? [];
  }
}
