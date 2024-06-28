import { AfterbuyFilter } from "./AfterbuyFilter";

export type ValueListFilter<FilterName extends string, FilterValue> = AfterbuyFilter<
  FilterName,
  { FilterValue: FilterValue[] }
>;

export type StringValueListFilter<FilterName extends string> = ValueListFilter<FilterName, string>;

export type NumberValueListFilter<FilterName extends string> = ValueListFilter<FilterName, number>;
