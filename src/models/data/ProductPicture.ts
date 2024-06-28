export interface ProductPicture {
  Nr: number;
  Typ: number;
  Url: string;
  AltText: string;
  Childs?: { ProductPicture: ProductPicture[] };
}
