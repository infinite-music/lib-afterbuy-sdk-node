/**
 * Represents an additional description field with various properties.
 */
export interface AdditionalDescriptionField {
  /** Field ID */
  FieldID: number;
  /** Field ID name */
  Name: string;
  /** Visible field labeling */
  FieldLabel?: string;
  /** Content */
  FieldContent: string;
}
