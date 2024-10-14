import { AfterbuyResponse } from "../AfterbuyResponse";
import { ListedItem } from "../data/ListedItem";

export interface GetListerHistoryResponse
  extends AfterbuyResponse<
    "GetListerHistory",
    {
      ResultCount: number;
      LastHistoryID: number;
      HasMoreProducts: 1 | 0;
      ListedItems?: { ListedItem: ListedItem[] };
    }
  > {}
