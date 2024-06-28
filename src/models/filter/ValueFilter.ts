import { AfterbuyFilter } from "./AfterbuyFilter";

export type ValueFilter<FilterName extends string, FilterValue> = AfterbuyFilter<
  FilterName,
  { FilterValue: FilterValue }
>;

export type StringValueFilter<FilterName extends string> = ValueFilter<FilterName, string>;

export type NumberValueFilter<FilterName extends string> = ValueFilter<FilterName, number>;
