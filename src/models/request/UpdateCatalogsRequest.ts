import { AfterbuyRequest } from "../AfterbuyRequest";
import { ShopCatalogUpdate } from "../data/ShopCatalogUpdate";

export interface UpdateCatalogsRequest<UpdateAction extends UpdateCatalogsRequest.UpdateAction>
  extends AfterbuyRequest<"UpdateCatalogs", UpdateCatalogsRequest.DetailLevel> {
  Catalogs: {
    UpdateAction: UpdateAction;
    Catalog: UpdateAction extends UpdateCatalogsRequest.UpdateAction.Create
      ? Partial<ShopCatalogUpdate> & Required<Pick<ShopCatalogUpdate, "CatalogName">>
      : Partial<ShopCatalogUpdate> & Required<Pick<ShopCatalogUpdate, "CatalogID">>;
  };
}

export namespace UpdateCatalogsRequest {
  export enum DetailLevel {
    None = 0,
  }

  export enum UpdateAction {
    Create = 1,
    Refresh = 2,
    Delete = 3,
  }
}
