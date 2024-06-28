import { AfterbuyResponse } from "../AfterbuyResponse";
import { UserDefinedFlag } from "../data/UserDefinedFlag";

export interface GetUserDefinedFlagsResponse
  extends AfterbuyResponse<"GetUserDefinedFlags", { UserDefinedFlags: { UserDefinedFlag: UserDefinedFlag[] } }> {}
