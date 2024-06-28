import { AfterbuyRequest } from "../AfterbuyRequest";
import { AfterbuyDataFilter } from "../filter/AfterbuyDataFilter";
import { DateRangeFilter } from "../filter/DateRangeFilter";
import { FlagFilter } from "../filter/FlagFilter";
import { ListingTypeFilter } from "../filter/ListingTypeFilter";
import { SiteIDFilter } from "../filter/SiteIDFilter";
import { NumberValueFilter, StringValueFilter, ValueFilter } from "../filter/ValueFilter";
import { NumberValueRangeFilter } from "../filter/ValueRangeFilter";

export interface GetListerHistoryRequest
  extends AfterbuyRequest<"GetListerHistory", GetListerHistoryRequest.DetailLevel>,
    AfterbuyDataFilter<
      | StringValueFilter<"HistoryID" | "Anr">
      | NumberValueRangeFilter<"RangeID" | "RangeAnr">
      | DateRangeFilter<"StartDate" | "EndDate">
      | ValueFilter<"Plattform", "eBay" | "elimbo" | "AmazonSC" | "Hood" | "Auvito" | "Auxion">
      | FlagFilter<"Running">
      | ListingTypeFilter
      | NumberValueFilter<"AccountID">
      | SiteIDFilter
    > {
  MaxHistoryItems: number;
}

export namespace GetListerHistoryRequest {
  export enum DetailLevel {
    None = 0,
    Base = 1 << 1,
    BaseCatalogAssignment = 1 << 2,
    BaseCatalogAssignmentDescription = 1 << 3,
    Description = 1 << 4,
  }
}
