import { AfterbuyRequest } from "../AfterbuyRequest";
import { Order } from "../data/Order";

export interface UpdateSoldItemsRequest extends AfterbuyRequest<"UpdateSoldItems", UpdateSoldItemsRequest.DetailLevel> {
  Orders: { Order: Order[] };
}

export namespace UpdateSoldItemsRequest {
  export enum DetailLevel {
    None = 0,
  }
}
