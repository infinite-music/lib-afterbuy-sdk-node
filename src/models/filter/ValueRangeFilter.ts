import { AfterbuyFilter } from "./AfterbuyFilter";

export type ValueRangeFilter<FilterName extends string, FilterValue> = AfterbuyFilter<
  FilterName,
  { ValueFrom: FilterValue; ValueTo: FilterValue }
>;

export type NumberValueRangeFilter<FilterName extends string> = ValueRangeFilter<FilterName, number>;
