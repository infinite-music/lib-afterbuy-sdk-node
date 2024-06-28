import { ListingDetails } from "./ListingDetails";

export interface ListedItem {
  HistoryID: number;
  ListingID: number;
  ProductID: number;
  ListingDetails?: ListingDetails;
}
