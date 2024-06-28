import { ProductCatalog } from "./ProductCatalog";

export interface ProductDetails {
  Name: string;
  ShortDescription: string;
  Catalogs?: { Catalog: ProductCatalog[] };
}
