export interface PaymentService {
  PaymentID: number;
  PaymentFunctionID: number;
  StandardText: string;
  Name: string;
  Position: number;
  Surcharge: number;
  SurchargePercent: number;
  MinAmount: number;
  MaxAmount: number;
  PlattformName: string;
  StandardForAll?: boolean;
  Default?: boolean;
  CountryGroup: string;
}
