import { EBayVariationData } from "./EBayVariationData";

export interface BaseProductsRelationData {
  Quantity: number;
  VariationLabel: number;
  DefaultProduct: 0 | 1;
  Position: number;
  eBayVariationData?: EBayVariationData;
}
