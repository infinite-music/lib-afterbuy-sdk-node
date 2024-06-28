import { AfterbuyResponse } from "../AfterbuyResponse";
import { AfterbuyVersion } from "../data/AfterbuyVersion";

export interface GetVersionResponse
  extends AfterbuyResponse<"GetVersion", { Versions: { Version: AfterbuyVersion[] } }> {}
