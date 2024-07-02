import { AfterbuyResponse } from "../AfterbuyResponse";
import { NewCatalog } from "../data/NewCatalog";
import { CatalogNotDeleted } from "../data/CatalogNotDeleted";

export interface UpdateCatalogsResponse
  extends AfterbuyResponse<
    "UpdateCatalogs",
    {
      NewCatalogs?: { NewCatalog: NewCatalog[] };
      CatalogsNotDeleted: { CatalogNotDeleted?: CatalogNotDeleted[] };
    }
  > {}
