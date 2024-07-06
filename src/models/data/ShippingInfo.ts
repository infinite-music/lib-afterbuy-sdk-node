import { ParcelLabel } from "./ParcelLabel";

export interface ShippingInfo {
  ShippingMethod: string;
  ShippingReturnMethod: string;
  ShippingCost: number;
  ShippingAdditionalCost: number;
  ShippingTotalCost: number;
  ShippingTaxRate: number;
  DeliveryDate: string;
  ParcelLabels?: { ParcelLabel: ParcelLabel[] };
}
