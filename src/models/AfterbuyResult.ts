import { AfterbuyError } from "./AfterbuyError";
import { AfterbuyWarning } from "./AfterbuyWarning";

export interface AfterbuyResult {
  AfterbuyTimeStamp?: string;
  AfterbuyUniversalTimeStamp?: string;
  WarningList?: AfterbuyWarning[];
  ErrorList?: AfterbuyError[];
}