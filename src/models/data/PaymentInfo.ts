import { PaymentData } from "./PaymentData";
import { PayoutId } from "./PayoutId";

export interface PaymentInfo {
  PaymentID: string;
  PaymentMethod: string;
  PaymentFunction: string;
  PaymentData: PaymentData;
  PaymentTransactionID: string;
  PaymentStatus: string;
  PaymentDate: string;
  AlreadyPaid: number;
  FullAmount: number;
  PaymentInstruction: string;
  InvoiceDate: string;
  EFTID: string;
  PayoutIds?: { PayoutId: PayoutId[] };
}
