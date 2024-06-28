import { AfterbuyResponse } from "../AfterbuyResponse";
import { AfterbuyTime } from "../data/AfterBuyTime";
import { UserDefinedFlag } from "../data/UserDefinedFlag";

export interface GetAfterbuyTimeResponse extends AfterbuyResponse<"GetAfterbuyTime", AfterbuyTime> {}
