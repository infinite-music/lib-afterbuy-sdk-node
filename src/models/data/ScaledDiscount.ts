/**
 * Represents a scaled discount model.
 */
export interface ScaledDiscount {
  /** The quantity at which the discount is applied. */
  ScaledQuantity: number;
  /** The price after the discount is applied. */
  ScaledPrice: number;
  /** The discounted price. */
  ScaledDPrice: number;
}
