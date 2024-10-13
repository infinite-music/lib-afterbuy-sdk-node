/**
 * Represents a property of a part with a specific name and value.
 */
export interface PartsProperty {
  /** The name of the property, which can be one of "KType", "HSN", "TSN", or "FitmentComments". */
  PropertyName: "KType" | "HSN" | "TSN" | "FitmentComments";
  /** The value associated with the property name. */
  PropertyValue: string;
}
