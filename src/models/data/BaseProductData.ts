import { ChildProduct } from "./ChildProduct";

export interface BaseProductData {
  BaseProductType: number;
  ChildProduct?: ChildProduct;
}
