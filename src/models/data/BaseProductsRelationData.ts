import { EBayVariationData } from "./EbayVariationData";

export interface BaseProductsRelationData {
  Quantity: number;
  VariationLabel: number;
  DefaultProduct: number;
  Position: number;
  eBayVariationData?: EBayVariationData;
}
