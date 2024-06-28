import { BillingAddress } from "./BillingAddress";
import { ShippingAddress } from "./ShippingAddress";

export interface BuyerInfo {
  BillingAddress: BillingAddress;
  ShippingAddress: ShippingAddress;
}
