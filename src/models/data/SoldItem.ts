import { ShopProductDetails } from "./ShopProductDetails";
import { SoldItemAttribute } from "./SoldItemAttribute";

export interface SoldItem {
  ItemDetailsDone: 1 | 0;
  ItemID: number;
  Anr: number;
  IsAmazonBusiness?: 1 | 0;
  IsAmazonPrime?: 1 | 0;
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
  eBayFeedbackCompleted?: 1 | 0;
  eBayFeedbackReceived?: 1 | 0;
  eBayFeedbackCommentType: string;
  ShopProductDetails?: ShopProductDetails;
  SoldItemAttributes?: { SoldItemAttribute: SoldItemAttribute[] };
}
