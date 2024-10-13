/**
 * Interface representing pagination details for Afterbuy.
 */
export interface AfterbuyPagination {
  /** Total number of hits of the request. */
  TotalNumberOfEntries: string;
  /** Number of pages that can be retrieved (calculated based on the total number and the requested list length - MaxShopItems). */
  TotalNumberOfPages: string;
  /** The requested list length is returned for information purposes. */
  ItemsPerPage: string;
  /** The current page. */
  PageNumber: number;
}
