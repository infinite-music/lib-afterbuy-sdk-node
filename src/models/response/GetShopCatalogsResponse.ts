import { AfterbuyResponse } from "../AfterbuyResponse";
import { ShopCatalog } from "../data/ShopCatalog";

export interface GetShopCatalogsResponse
  extends AfterbuyResponse<
    "GetShopCatalogs",
    {
      HasMoreCatalogs: boolean;
      LastCatalogID: number;
      Catalogs: { Catalog: ShopCatalog[] };
    }
  > {}
