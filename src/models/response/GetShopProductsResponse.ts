import { AfterbuyResponse } from "../AfterbuyResponse";
import { AfterbuyPagination } from "../data/AfterbuyPagination";
import { ShopProduct } from "../data/ShopProduct";

/**
 * Response of the GetShopProducts request.
 */
export interface GetShopProductsResponse
  extends AfterbuyResponse<
    "GetShopProducts",
    {
      /** Indicates if other products exist */
      HasMoreProducts: 1 | 0;
      /** The numerically highest ProductID in the query */
      LastProductID: number;
      /** Container with pagination data */
      PaginationResult?: AfterbuyPagination;
      /** Container with products */
      Products: { Product: ShopProduct[] };
    }
  > {}
