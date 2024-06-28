import { AfterbuyRequest } from "../AfterbuyRequest";
import { AfterbuyDataFilter } from "../filter/AfterbuyDataFilter";
import { NumberValueFilter, StringValueFilter } from "../filter/ValueFilter";
import { NumberValueRangeFilter } from "../filter/ValueRangeFilter";

export interface GetShopCatalogsRequest
  extends AfterbuyRequest<"GetShopCatalogs", GetShopCatalogsRequest.DetailLevel>,
    AfterbuyDataFilter<
      StringValueFilter<"CatalogID"> | NumberValueRangeFilter<"RangeID" | "RangeLevel"> | NumberValueFilter<"Level">
    > {
  MaxCatalogs: number;
}

export namespace GetShopCatalogsRequest {
  export enum DetailLevel {
    Base = 0,
    CatalogAssignments = 1 << 1,
  }
}
