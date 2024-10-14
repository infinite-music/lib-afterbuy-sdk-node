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
  StandardForAll?: 1 | 0;
  Default?: 1 | 0;
  CountryGroup: string;
}
