import { ShippingAddress } from "./ShippingAddress";

export interface BillingAddress extends ShippingAddress {
  AfterbuyUserID: number;
  AfterbuyUserIDAlt: number;
  UserIDPlattform: string;
  Title: string;
  Fax: string;
  Mail: string;
  IsMerchant: boolean;
}
