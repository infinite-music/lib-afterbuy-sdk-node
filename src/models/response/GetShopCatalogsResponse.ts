import { AfterbuyResponse } from "../AfterbuyResponse";
import { ShopCatalog } from "../data/ShopCatalog";

export interface GetShopCatalogsResponse
  extends AfterbuyResponse<
    "GetShopCatalogs",
    {
      HasMoreCatalogs: 1 | 0;
      LastCatalogID: number;
      Catalogs: { Catalog: ShopCatalog[] };
    }
  > {}
