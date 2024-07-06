import { ShippingMethod, ShippingMethodCost } from "./ShippingMethod";

export interface ShippingServiceCost {
  ShippingServiceName: string;
  ShippingServicePriority: string;
  ShippingMethods?: { ShippingMethod: ShippingMethodCost[] };
}

export interface ShippingService {
  Name: string;
  ShippingMethods?: { ShippingMethod: ShippingMethod[] };
}
