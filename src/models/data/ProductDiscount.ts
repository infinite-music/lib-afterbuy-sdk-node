/**
 * Enum representing the types of discount control.
 */
export enum DiscountControlType {
  /** Represents a live shopping discount control type. */
  LiveShopping = 2,
  /** Represents a standard discount control type. */
  Discount = 3,
}

/**
 * Enum representing the types of discounts that can be applied to a product.
 */
export enum DiscountType {
  /** Discount is a percentage of the product price */
  Percent = 0,
  /** Discount is a fixed amount subtracted from the product price */
  Amount = 1,
}

/**
 * Represents a product discount in the system.
 */
export interface ProductDiscount {
  /** Store ID */
  ShopId: number;
  /** Action active/inactive */
  DiscountActive: 1 | 0;
  /** Type of action (LiveShopping - 2, Discount - 3) */
  ControlId: DiscountControlType;
  /** Text for the old price */
  PriceType: string;
  /** Text for the new price */
  NewPriceType: string;
  /** Action start date */
  StartDate: string;
  /** Action end date */
  ExpireDate: string;
  /** Type of discount: 0 - % discount, 1 - € discount */
  Type: DiscountType;
  /** Discount as percentage */
  DiscountPercent: number;
  /** Discount in EUR */
  DiscountAmount: number;
  /** Amount saved compared to the old price */
  SavedAmount: number;
  /** Discounted price */
  DiscountedPrice: number;
  /** Quantity. Only for LiveShopping (ControlID = 2) */
  Quantity: number;
}
