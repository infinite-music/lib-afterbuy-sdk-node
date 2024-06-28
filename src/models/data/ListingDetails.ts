import { ProductDetails } from "./ProductDetails";
export interface ListingDetails {
  Anr: number;
  SoldItems: number;
  ListedQuantity: number;
  ListingPlatform: string;
  ListingTitle: string;
  SellStatus: string;
  ListingFee: number;
  StartTime: string;
  EndTime: string;
  ListingDuration: number;
  ListingType: number;
  ListingDescription: string;
  eBayCategoryID?: number;
  eBayCategory2ID?: number;
  eBaySubAccountID?: number;
  eBayStartprice?: number;
  eBayBuyItNowPrice?: number;
  eBayPictureURL?: string;
  eBayGaleryURL?: string;
  eBayRelist?: boolean;
  ProductDetails?: ProductDetails;
}
