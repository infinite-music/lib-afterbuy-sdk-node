import { BuyerInfo } from "./BuyerInfo";
import { PaymentInfo } from "./PaymentInfo";
import { ShippingInfo } from "./ShippingInfo";
import { SoldItem } from "./SoldItem";

export interface Order {
  InvoiceNumber: number;
  OrderID: number;
  EbayAccount: string;
  AmazonAccount: string;
  Anr: number;
  AlternativeItemNumber1: string;
  FeedbackDate: string;
  UserComment: string;
  AdditionalInfo: string;
  TrackingLink: string;
  Memo: string;
  InvoiceMemo: string;
  FeedbackLink: string;
  OrderDate: string;
  OrderIDAlt: string;
  PaymentInfo: PaymentInfo;
  BuyerInfo: BuyerInfo;
  SoldItems: { SoldItem: SoldItem[] };
  ShippingInfo: ShippingInfo;
  Tags: { Tag: string[] };
  IsCheckoutConfirmedByCustomer: number;
}
