import { AfterbuyResponse } from "../AfterbuyResponse";
import { ShippingServiceCost } from "../data/ShippingService";

export interface GetShippingCostResponse
  extends AfterbuyResponse<"GetShippingCost", { ShippingService: ShippingServiceCost }> {}
