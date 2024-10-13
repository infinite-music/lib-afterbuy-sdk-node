/**
 * Enum representing different types of product pictures.
 */
export enum ProductPictureType {
  /** Thumbnail image type */
  Thumb = 1,
  /** Zoomed image type */
  Zoom = 2,
  /** List image type */
  List = 3,
}

/**
 * Represents a product picture with various attributes.
 */
export interface ProductPicture {
  /** The number of the picture (1 to 12). */
  Nr: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** The type of the product picture. */
  Typ: ProductPictureType;
  /** The URL of the product picture. */
  Url: string;
  /** The alternative text for the product picture. */
  AltText: string;
  /** Optional child product pictures. */
  Childs?: { ProductPicture: ProductPicture[] };
}
