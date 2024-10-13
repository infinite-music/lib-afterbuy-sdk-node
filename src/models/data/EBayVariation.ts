export interface EBayVariation {
  VariationName: string;
  VariationValues: {
    ValidForProdID: number;
    VariationValue: string;
    VariationPos: number;
    VariationPicURL: string;
  }[];
}
