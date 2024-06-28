import { AfterbuyResponse } from "../AfterbuyResponse";
import { PaymentService } from "../data/PaymentService";

export interface GetPaymentServicesResponse
  extends AfterbuyResponse<"GetPaymentServices", { PaymentService: PaymentService[] }> {}
