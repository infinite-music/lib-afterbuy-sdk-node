import { AfterbuyFilter } from "./AfterbuyFilter";

export type DateRangeFilter<FilterName extends string> = AfterbuyFilter<
  FilterName,
  { DateFrom: string; DateTo: string }
>;
