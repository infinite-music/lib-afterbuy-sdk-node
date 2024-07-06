import { BaseProduct } from "./BaseProduct";
import { ProductFeature } from "./ProductFeature";
import { ProductPicture } from "./ProductPicture";
import { ScaledDiscount } from "./ScaledDiscount";
import { ProductAttribute } from "./ProductAttribute";
import { PartsProperty } from "./PartsProperty";
import { AdditionalDescriptionField } from "./AdditionalDescriptionField";
import { AdditionalPrice } from "./AdditionalPrice";
import { ProductDiscount } from "./ProductDiscount";

export interface ShopProduct {
  Shop20ID: number;
  ProductID: number;
  Anr: number;
  EAN: string;
  Name: string;
  ModDate: string;
  VariationName: string;
  BaseProductFlag: number;
  BaseProductShowMode: number;
  BaseProducts?: { BaseProduct: BaseProduct[] };
  ShortDescription?: string;
  Tags: { Tag: string[] };
  Memo: string;
  HeaderID: number;
  HeaderDescriptionName?: string;
  HeaderDescriptionValue?: string;
  Description: string;
  FooterID: number;
  FooterDescriptionName?: string;
  FooterDescriptionValue?: string;
  GoogleBaseShipping: string;
  Keywords: string;
  AvailableShop: number;
  Quantity: number;
  AuctionQuantity: number;
  Stock: boolean;
  Discontinued: boolean;
  MergeStock: boolean;
  UnitOfQuantity: number;
  BasepriceFactor: string;
  MinimumStock: number;
  MinimumOrderQuantity: number;
  FullFilmentQuantity: number;
  FullFilmentImport: string;
  SellingPrice: number;
  BuyingPrice: number;
  DealerPrice: number;
  Level: number;
  Position: number;
  TitleReplace: boolean;
  ScaledDiscounts?: { ScaledDiscount: ScaledDiscount[] };
  TaxRate: number;
  Weight: number;
  SearchAlias: string;
  Froogle: boolean;
  Kelkoo: boolean;
  ShippingGroup: string;
  ShopShippingGroup: string;
  SearchEngineShipping: string;
  CrossCatalogID: number;
  FreeValue1?: string;
  FreeValue2?: string;
  FreeValue3?: string;
  FreeValue4?: string;
  FreeValue5?: string;
  FreeValue6?: string;
  FreeValue7?: string;
  FreeValue8?: string;
  FreeValue9?: string;
  FreeValue10?: string;
  DeliveryTime: string;
  Stocklocation_1?: string;
  Stocklocation_2?: string;
  Stocklocation_3?: string;
  Stocklocation_4?: string;
  CountryOfOrigin?: string;
  LastSale: string;
  ImageSmallURL: string;
  ImageLargeURL: string;
  ManufacturerStandardProductIDType: string;
  ManufacturerStandardProductIDValue: string;
  ProductBrand: string;
  CustomsTariffNumber: string;
  GoogleProductCategory: string;
  ManufacturerPartNumber: string;
  Condition?: number;
  Pattern?: string;
  Material?: string;
  ItemColor?: string;
  ItemSize?: string;
  CanonicalUrl?: string;
  EnergyClass?: number;
  EnergyClassPictureUrl?: string;
  DataSheetUrl: string;
  Skus?: { Sku: string[] };
  ProductPictures?: { ProductPicture: ProductPicture[] };
  Catalogs?: { CatalogID: number[] };
  Attributes?: { Attribut: ProductAttribute[] };
  PartsFitment?: {
    PartsProperties: { PartsProperty: PartsProperty[] };
  };
  Features?: { Feature: ProductFeature[] };
  AdditionalDescriptionFields?: { AdditionalDescriptionField: AdditionalDescriptionField[] };
  AdditionalPrices?: { AdditionalPrice: AdditionalPrice[] };
  Discounts?: { Discount: ProductDiscount[] };
}
