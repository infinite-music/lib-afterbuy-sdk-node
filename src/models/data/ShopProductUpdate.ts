import { ShopProduct } from "./ShopProduct";
import { ProductIdent } from "./ProductIdent";
import { ProductCatalog } from "./ProductCatalog";
import { AdditionalDescriptionFieldUpdate } from "./AdditionalDescriptionFieldUpdate";
import { EBayVariation } from "./EBayVariation";

export enum SkuUpdateAction {
  Add = 1,
  Replace = 2,
  Delete = 3,
}

export enum CatalogUpdateAction {
  Update = 1,
  Replace = 2,
  Delete = 3,
}

export enum AttributeUpdateAction {
  Add = 1,
  Update = 1,
  Replace = 2,
  Delete = 3,
}

export enum BaseProductUpdateAction {
  Update = 1,
  Replace = 2,
}

export interface ShopProductUpdate
  extends Omit<
    ShopProduct,
    | "ModDate"
    | "Shop20ID"
    | "ProductID"
    | "Skus"
    | "Catalogs"
    | "Attributes"
    | "BaseProducts"
    | "EconomicOperator"
    | "AdditionalDescriptionFields"
  > {
  ProductIdent: ProductIdent;
  EconomicOperatorId: number;
  Skus: { UpdateAction: SkuUpdateAction; Sku: string[] }[];
  AddCatalogs: { UpdateAction: CatalogUpdateAction; AddCatalog: ProductCatalog[] }[];
  AddAttributes: { UpdateAction: AttributeUpdateAction; AddAttribute: string[] }[];
  AddBaseProducts: { UpdateAction: BaseProductUpdateAction; AddBaseProduct: string[] }[];
  AdditionalDescriptionFields: { AdditionalDescriptionField: AdditionalDescriptionFieldUpdate[] };
  UseEbayVariations: { Variation: EBayVariation[] };
}
