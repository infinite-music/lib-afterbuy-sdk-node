/**
 * Enum representing different types of product attributes.
 */
export enum AttributTyp {
  /** Represents a text attribute. */
  Text = 0,
  /** Represents a text field attribute. */
  TextField = 1,
  /** Represents a dropdown attribute. */
  Dropdown = 2,
  /** Represents a link attribute. */
  Link = 3,
}

/**
 * Represents a product attribute in the system.
 */
export interface ProductAttribute {
  /** The name of the attribute. */
  AttributName: string;
  /** The value of the attribute. */
  AttributWert: string;
  /** The type of the attribute. */
  AttributTyp: AttributTyp;
  /** Indicates if the attribute is required (1 for true, 0 for false). */
  AttributRequired: 1 | 0;
}
