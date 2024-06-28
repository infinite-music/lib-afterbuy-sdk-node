import { AfterbuyResponse } from "../AfterbuyResponse";
import { ShippingService } from "../data/ShippingService";

export interface GetShippingServicesResponse
  extends AfterbuyResponse<"GetShippingServices", { ShippingServiceS: { ShippingService: ShippingService[] } }> {}
