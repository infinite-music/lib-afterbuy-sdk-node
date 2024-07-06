export interface ShippingMethodCost {
  ShippingCost: number;
  ShippingMethod: string;
  ShippingMethodID: number;
}

export interface ShippingMethod {
  ShippingMethodID: number;
  Name: string;
  CountryGroup: number;
  Level: number;
  TaxRate: number;
  PriceFrom: number;
  PriceTo: number;
  IslandAdditionalCosts: number;
  FreeShippingPriceFrom: number;
  AdditionalItemCosts: number;
  WeightDefinitions?: {
    WeightDefinitions: {
      WeightTo: number;
      Price: number;
    }[];
  };
}
