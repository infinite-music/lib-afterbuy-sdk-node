import { AfterbuyError } from "./data/AfterbuyError";

export interface AfterbuyResponse<CallName extends string, T> {
  Afterbuy: {
    CallStatus: "Success" | "Error";
    CallName: CallName;
    Result: T;
  };
}

export type AfterbuyErrorResponse<CallName extends string> = AfterbuyResponse<
  CallName,
  { ErrorList: { Error: AfterbuyError[] } }
>;
