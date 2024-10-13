import { BaseProductsRelationData } from "./BaseProductsRelationData";

/**
 * Enum representing various flags for a base product.
 */
export enum BaseProductFlag {
  /** Flag indicating the product is part of a variation set. */
  VariationSet = 1,
  /** Flag indicating the product is part of a product set. */
  ProductSet = 2,
  /** Flag indicating the product is assigned to a set. */
  AssignedToSet = 3,
}

/**
 * Enum representing the base product types.
 */
export enum BaseProductType {
  /** Represents a standard product. */
  Product = 0,
  /** Represents a variation set of products. */
  VariationSet = 1,
  /** Represents a set of products. */
  ProductSet = 2,
}

/**
 * Represents the base product model.
 */
export interface BaseProduct {
  /**
   * ID of the product assigned to the set.
   * - If BaseProductFlag = {@link BaseProductFlag.VariationSet}, {@link BaseProductFlag.ProductSet} - ProductID of the product assigned to the set.
   * - If BaseProductFlag = {@link BaseProductFlag.AssignedToSet} - ID of the set product to which the product is assigned.
   */
  BaseProductID: number;

  /**
   * Type of the set product
   *
   * - {@link BaseProductType.VariationSet} - Variation set
   * - {@link BaseProductType.ProductSet} - Product set
   *
   * Only returned if BaseProductFlag = {@link BaseProductFlag.AssignedToSet}
   */
  BaseProductType?: BaseProductType;

  /**
   * Container with set related data
   *
   * Only returned if BaseProductFlag = {@link BaseProductFlag.VariationSet}, {@link BaseProductFlag.ProductSet}
   */
  BaseProductsRelationData?: BaseProductsRelationData;
}
