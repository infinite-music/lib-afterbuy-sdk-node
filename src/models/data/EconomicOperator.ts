/**
 * Represents an economic operator with various contact details.
 */
export interface EconomicOperator {
  /** The company name of the economic operator. */
  Company: string;
  /** The street of the economic operator. */
  Street1: string;
  /** The address2 of the economic operator. */
  Street2: string;
  /** The postalcode of the economic operator. */
  PostalCode: string;
  /** The city of the economic operator. */
  City: string;
  /** The state or province of the economic operator. */
  StateOrProvince: string;
  /** The country of the economic operator. */
  Country: string;
  /** The email of the economic operator. */
  Email: string;
  /** The phone of the economic operator. */
  Phone: string;
}
