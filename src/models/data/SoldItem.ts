import { ShopProductDetails } from "./ShopProductDetails";
import { SoldItemAttribute } from "./SoldItemAttribute";

export interface SoldItem {
  ItemDetailsDone: boolean;
  ItemID: number;
  Anr: number;
  IsAmazonBusiness?: boolean;
  IsAmazonPrime?: boolean;
  FulfillmentServiceLeve?: number;
  eBayTransactionID?: number;
  AlternativeItemNumber1?: string;
  AlternativeItemNumber?: string;
  InternalItemType: number;
  UserDefinedFlag?: number;
  ItemTitle: string;
  ItemQuantity: number;
  ItemPrice: number;
  ItemEndDate: number;
  TaxRate: number;
  ItemWeight: number;
  ItemXmlDate: string;
  ItemModDate: string;
  ItemPlatformName: string;
  ItemLink: string;
  eBayFeedbackCompleted?: boolean;
  eBayFeedbackReceived?: boolean;
  eBayFeedbackCommentType: string;
  ShopProductDetails?: ShopProductDetails;
  SoldItemAttributes?: { SoldItemAttribute: SoldItemAttribute[] };
}
