import { AfterbuyResponse } from "../AfterbuyResponse";
import { AfterbuyPagination } from "../data/AfterbuyPagination";
import { ShopProduct } from "../data/ShopProduct";

export interface GetShopProductsResponse
  extends AfterbuyResponse<
    "GetShopProducts",
    {
      HasMoreProducts: boolean;
      LastProductID: number;
      PaginationResult: AfterbuyPagination;
      Products: { Product: ShopProduct[] };
    }
  > {}
