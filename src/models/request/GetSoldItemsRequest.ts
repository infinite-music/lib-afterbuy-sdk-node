import { AfterbuyRequest } from "../AfterbuyRequest";
import { AfterbuyDataFilter } from "../filter/AfterbuyDataFilter";
import { DateRangeFilter } from "../filter/DateRangeFilter";
import { NumberValueFilter, StringValueFilter, ValueFilter } from "../filter/ValueFilter";
import { NumberValueListFilter, StringValueListFilter } from "../filter/ValueListFilter";
import { NumberValueRangeFilter } from "../filter/ValueRangeFilter";

export interface GetSoldItemsRequest
  extends AfterbuyRequest<"GetSoldItems", GetSoldItemsRequest.DetailLevel>,
    Required<
      AfterbuyDataFilter<
        | (DateRangeFilter<"DateFilter"> &
            ValueFilter<
              "DateFilter",
              | "AuctionEndDate"
              | "FeedbackDate"
              | "PayDate"
              | "ShippingDate"
              | "InvoiceDate"
              | "ModDate"
              | "XmlDate"
              | "MailDate"
              | "ReminderDate"
            >)
        | NumberValueFilter<"OrderID" | "AfterbuyUserID" | "UserDefinedFlag">
        | StringValueFilter<"AfterbuyUserEmail" | "Tag">
        | ValueFilter<"Plattform", string | `not_${string}`>
        | NumberValueRangeFilter<"RangeID">
        | ValueFilter<
            "DefaultFilter",
            | "NewAuctions"
            | "ReadyToShip"
            | "CompletedAuctions"
            | "PaidAuctions"
            | "InvoicePrinted"
            | "NoXMLDate"
            | "not_NewAuctions"
            | "not_ReadyToShip"
            | "not_CompletedAuctions"
            | "not_PaidAuctions"
            | "not_InvoicePrinted"
            | "not_NoXMLDate"
          >
        | NumberValueListFilter<"ShopId" | "InvoiceNumber">
        | StringValueListFilter<"AlternativeItemNumber1" | "AlternativeItemNumber2">
      >
    > {
  RequestAllItems?: 1 | 0;
  MaxSoldItems?: number;
  OrderDirection?: 1 | 0;
  ReturnHiddenItems?: 1 | 0;
}

export namespace GetSoldItemsRequest {
  export enum DetailLevel {
    Operation = 0,
    Payment = 1 << 1,
    Buyer = 1 << 2,
    Article = 1 << 3,
    Shipping = 1 << 4,
    ArticleSelected = 1 << 5,
  }
}
