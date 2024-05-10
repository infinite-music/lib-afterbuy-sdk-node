export interface AfterbuyResponse<CallName extends string, T> {
  CallStatus: string;
  CallName: CallName;
  Result: T;
}
