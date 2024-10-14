import { BaseProduct, BaseProductFlag } from "./BaseProduct";
import { ProductFeature } from "./ProductFeature";
import { ProductPicture } from "./ProductPicture";
import { ScaledDiscount } from "./ScaledDiscount";
import { ProductAttribute } from "./ProductAttribute";
import { PartsProperty } from "./PartsProperty";
import { AdditionalDescriptionField } from "./AdditionalDescriptionField";
import { AdditionalPrice } from "./AdditionalPrice";
import { ProductDiscount } from "./ProductDiscount";
import { EconomicOperator } from "./EconomicOperator";

/**
 * Enum representing the condition of a product in the shop.
 */
export enum ProductCondition {
  /** No condition specified. */
  NoCondition = 0,
  /** The product is new. */
  New = 1,
  /** The product is used. */
  Used = 2,
  /** The product is refurbished. */
  Refurbished = 3,
}

/**
 * Enum representing different energy classes for a shop product.
 */
export enum EnergyClass {
  /** No class. */
  NoClass = 0,
  /** A+++. */
  A3Plus = 10,
  /** A++. */
  A2Plus = 9,
  /** A+. */
  APlus = 8,
  /** A. */
  A = 7,
  /** B. */
  B = 6,
  /** C. */
  C = 5,
  /** D. */
  D = 4,
  /** E. */
  E = 3,
  /** F. */
  F = 2,
  /** G. */
  G = 1,
}

/**
 * Enum representing various units of quantity for shop products.
 */
export enum UnitOfQuantity {
  /** No specific unit of quantity. */
  None = "",
  /** Quantity measured per liter. */
  PerLiter = "L",
  /** Quantity measured per kilogram. */
  PerKilogram = "Kg",
  /** Quantity measured per piece. */
  PerPiece = "Stk",
  /** Quantity measured per pair. */
  PerPair = "Pr",
  /** Quantity measured per meter. */
  PerMeter = "m",
  /** Quantity measured per square meter. */
  PerSquareMeter = "qm",
  /** Quantity measured per package. */
  PerPackage = "Packung",
  /** Quantity measured per gram. */
  PerGram = "g",
  /** Quantity measured per milliliter. */
  PerMilliliter = "ml",
  /** Quantity measured per 100 grams. */
  Per100Gram = "100 g",
  /** Quantity measured per 100 milliliters. */
  Per100Milliliter = "100 ml",
}

/**
 * Enum representing the gender categories for shop products.
 */
export enum Gender {
  /** No specific gender. */
  None = 0,
  /** Suitable for all genders. */
  Unisex = 1,
  /** Suitable for men. */
  Men = 2,
  /** Suitable for ladies. */
  Ladies = 3,
}

/**
 * Enum representing different age groups for shop products.
 */
export enum AgeGroup {
  /** No specific age group. */
  None = 0,
  /** Products intended for adults. */
  Adults = 1,
  /** Products intended for children. */
  Children = 2,
  /** Products intended for infants. */
  Infants = 3,
  /** Products intended for newborns. */
  Newborns = 4,
}

/**
 * Represents a shop product with various attributes and properties.
 */
export interface ShopProduct {
  /** Shop20 ID (returned only if the product is assigned to a specific store, otherwise not). */
  Shop20ID: number;
  /** ProductID. */
  ProductID: number;
  /** Item number. Recommendation: Please use only integers for item numbers even if float values are allowed. */
  Anr: number;
  /** EAN. */
  EAN: string;
  /** Product name. */
  Name: string;
  /** Date of last change. */
  ModDate: string;
  /** Variation set name. */
  VariationName: string;
  /** Identifies a set product. Possible values: 1 - Variation set, 2 - Product set, 3 - The product is assigned to at least one set. */
  BaseProductFlag: BaseProductFlag;
  /** Base products. */
  BaseProducts?: { BaseProduct: BaseProduct[] };
  /** Short description. */
  ShortDescription?: string;
  /** Product Memo. */
  Memo: string;
  /** Header description name. */
  HeaderDescriptionName?: string;
  /** Header description value. */
  HeaderDescriptionValue?: string;
  /** Description. */
  Description: string;
  /** Footer description name. */
  FooterDescriptionName?: string;
  /** Footer description value. */
  FooterDescriptionValue?: string;
  /** Google Base Shipping Costs. */
  GoogleBaseShipping: string;
  /** Product keywords for search engines. */
  Keywords: string;
  /** Stock. */
  Quantity: number;
  /** Availability. */
  AvailableShop: number;
  /** Auction stock. */
  AuctionQuantity: number;
  /** Stock items. */
  Stock: 1 | 0;
  /** Discontinued items. */
  Discontinued: 1 | 0;
  /** Merge stocks. */
  MergeStock: -1 | 1 | 0;
  /** Unit. */
  UnitOfQuantity: UnitOfQuantity;
  /** Content. */
  BasepriceFactor: number;
  /** Minimum stock. */
  MinimumStock: number;
  /** Minimum order quantity. */
  MinimumOrderQuantity: number;
  /** Fullfilment stock. */
  FullFilmentQuantity: number;
  /** Fullfilment import date. */
  FullFilmentImport: string;
  /** Selling price. */
  SellingPrice: number;
  /** Purchase price. */
  BuyingPrice: number;
  /** Dealer price. */
  DealerPrice: number;
  /** Product level. */
  Level: number;
  /** Position. */
  Position: number;
  /** Replace auction title with product name. */
  TitleReplace: 1 | 0;
  /** Container with scales. */
  ScaledDiscounts?: { ScaledDiscount: ScaledDiscount[] };
  /** VAT. */
  TaxRate: number;
  /** Weight. */
  Weight: number;
  /** Search alias. */
  SearchAlias: string;
  /** show on Froogle. */
  Froogle: 1 | 0;
  /** Kelkoo Export. */
  Kelkoo: 1 | 0;
  /** Shipping group. */
  ShippingGroup: string;
  /** Shipping group Shop. */
  ShopShippingGroup: string;
  /** Shipping costs for search engines / External connections. */
  SearchEngineShipping: string;
  /** Cross articles catalog. */
  CrossCatalogID: number;
  /** Free field. */
  FreeValue1?: string;
  /** Free field 2. */
  FreeValue2?: string;
  /** Free field 3. */
  FreeValue3?: string;
  /** Free field 4. */
  FreeValue4?: string;
  /** Free field 5. */
  FreeValue5?: string;
  /** Free field 6. */
  FreeValue6?: string;
  /** Free field 7. */
  FreeValue7?: string;
  /** Free field 8. */
  FreeValue8?: string;
  /** Free field 9. */
  FreeValue9?: string;
  /** Free field 10. */
  FreeValue10?: string;
  /** Delivery time. */
  DeliveryTime: string;
  /** Storage location 1. */
  Stocklocation_1?: string;
  /** Storage location 2. */
  Stocklocation_2?: string;
  /** Storage location 3. */
  Stocklocation_3?: string;
  /** Storage location 4. */
  Stocklocation_4?: string;
  /** Country of origin. */
  CountryOfOrigin?: string;
  /** Date of the last sale of this product. */
  LastSale: string;
  /** Image small URL. */
  ImageSmallURL: string;
  /** Image large URL. */
  ImageLargeURL: string;
  /** Amazon number types. */
  AmazonStandardProductIDType: string;
  /** Amazon number. */
  AmazonStandardProductIDValue: string;
  /** Manufacturer number types. */
  ManufacturerStandardProductIDType: string;
  /** Manufacturer number. */
  ManufacturerStandardProductIDValue: string;
  /** Hersteller-/Markenname. */
  ProductBrand: string;
  /** Google product category. */
  GoogleProductCategory: string;
  /** Manufacturer part number. */
  ManufacturerPartNumber: string;
  /** Product state. Possible values: 0 = No condition, 1 = New, 2 = Used, 3 = Refurbished. */
  Condition?: ProductCondition;
  /** Pattern. */
  Pattern?: string;
  /** Material. */
  Material?: string;
  /** Product color. */
  ItemColor?: string;
  /** Product size. */
  ItemSize?: string;
  /** Customs Tariff Number */
  CustomsTariffNumber?: string;
  /** Gender */
  Gender: Gender;
  /** Age Group */
  AgeGroup: AgeGroup;
  /** Unique product canonical url. */
  CanonicalUrl?: string;
  /** Possible values: 0 - No class, 10 - A+++, 9 - A++, 8 - A+, 7 - A, 6 - B, 5 - C, 4 - D, 3 - E, 2 - F, 1 - G. */
  EnergyClass?: EnergyClass;
  /** URL to the energy certificate. */
  EnergyClassPictureUrl?: string;
  /** Product data sheet URL. */
  DataSheetUrl: string;
  /** SKUs. */
  Skus?: { Sku: string[] };
  /** Container with catalogs. */
  ProductPictures?: { ProductPicture: ProductPicture[] };
  /** Container with catalogs. */
  Catalogs?: { CatalogID: number[] };
  /** Container with attributes. */
  Attributes?: { Attribut: ProductAttribute[] };
  /** Container for all car parts properties. */
  PartsFitment?: {
    /** Container for related car part properties. */
    PartsProperties: { PartsProperty: PartsProperty[] };
  };
  /** Container for additional product fields ('product features'). */
  Features?: { Feature: ProductFeature[] };
  /** Container for additional product description fields (tabs). */
  AdditionalDescriptionFields?: { AdditionalDescriptionField: AdditionalDescriptionField[] };
  /** Container for additional price fields. */
  AdditionalPrices?: { AdditionalPrice: AdditionalPrice[] };
  /** Container for additional price fields. */
  Discounts?: { Discount: ProductDiscount[] };
  /** Container for the EconomicOperator. */
  EconomicOperator: EconomicOperator;
  /** Facebook status. */
  Facebook?: 1 | 0;
  /** Custom label 0. */
  CustomLabel0?: string;
  /** Custom label 1. */
  CustomLabel1?: string;
  /** Custom label 2. */
  CustomLabel2?: string;
  /** Custom label 3. */
  CustomLabel3?: string;
  /** Custom label 4. */
  CustomLabel4?: string;
}
