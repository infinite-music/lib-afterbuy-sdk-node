import { AfterbuyFilter } from "./AfterbuyFilter";

export interface AfterbuyDataFilter<Filter extends AfterbuyFilter<string, {}>> {
  DataFilter?: {
    Filter: Filter[];
  };
}
