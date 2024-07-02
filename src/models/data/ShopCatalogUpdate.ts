import { ShopCatalog } from "./ShopCatalog";

export type ShopCatalogUpdate = Omit<ShopCatalog, "Name"> & { CatalogName: string };
