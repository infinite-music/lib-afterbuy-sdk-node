/**
 * Represents an additional price with its details.
 */
export interface AdditionalPrice {
  /** ID of the price definition. */
  DefinitionId: number;
  /** Name of the price definition. */
  Name: string;
  /** Price. */
  Value: number;
  /** Gross price. */
  Pretax?: 1 | 0;
}
