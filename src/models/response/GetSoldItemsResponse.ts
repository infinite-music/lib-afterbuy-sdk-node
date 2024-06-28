import { AfterbuyResponse } from "../AfterbuyResponse";
import { Order } from "../data/Order";

export interface GetSoldItemsResponse
  extends AfterbuyResponse<
    "GetSoldItems",
    {
      HasMoreItems: number;
      OrdersCount: number;
      LastOrderID: number;
      ItemsCount: number;
      Orders: { Order: Order[] };
    }
  > {}
