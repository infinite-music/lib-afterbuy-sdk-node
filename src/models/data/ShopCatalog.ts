export interface ShopCatalog {
  CatalogID: number;
  Name: string;
  Description: string;
  ParentID: number;
  Level: number;
  Position: number;
  AdditionalText: string;
  Show: boolean;
  Picture1: string;
  Picture2: string;
  TitlePicture: string;
  CatalogProducts: { ProductID: number[] };
}
