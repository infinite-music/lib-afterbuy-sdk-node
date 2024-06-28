import { AfterbuyRequest } from "../AfterbuyRequest";
import { AfterbuyDataFilter } from "../filter/AfterbuyDataFilter";
import { DateRangeFilter } from "../filter/DateRangeFilter";
import { StringValueFilter, ValueFilter } from "../filter/ValueFilter";
import { NumberValueRangeFilter } from "../filter/ValueRangeFilter";

export interface GetShopProductsRequest
  extends AfterbuyRequest<"GetShopProducts", GetShopProductsRequest.DetailLevel>,
    AfterbuyDataFilter<
      | StringValueFilter<"ProductID" | "ProductID" | "ProductID" | "Tag">
      | ValueFilter<"DefaultFilter", "AllSets" | "VariationsSets" | "ProductSets">
      | NumberValueRangeFilter<"RangeID" | "RangeID">
      | (DateRangeFilter<"DateFilter"> & ValueFilter<"DateFilter", "ModDate" | "LastSale" | "LastStockChange">)
    > {
  MaxShopItems: number;
  SuppressBaseProductRelatedData?: 1;
  PaginationEnabled?: 1;
  PageNumber?: number;
  ReturnShop20Container?: 1;
}

export namespace GetShopProductsRequest {
  export enum DetailLevel {
    All = 0,
    NoMemo = 1 << 1,
    Stock = 1 << 2,
    Base = 1 << 3,
    CatalogAssignments = 1 << 4,
    Availability = 1 << 6,
    Multilanguage = 1 << 7,
  }
}
