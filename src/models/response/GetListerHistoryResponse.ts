import { AfterbuyResponse } from "../AfterbuyResponse";
import { ListedItem } from "../data/ListedItem";

export interface GetListerHistoryResponse
  extends AfterbuyResponse<
    "GetListerHistory",
    {
      ResultCount: number;
      LastHistoryID: number;
      HasMoreProducts: boolean;
      ListedItems?: { ListedItem: ListedItem[] };
    }
  > {}
