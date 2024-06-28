import { ValueFilter } from "./ValueFilter";

export namespace AfterbuyListingType {
  export enum EBay {
    Auction = 1,
    PowerAuction = 2,
    EbayStore = 7,
    BuyItNow = 9,
  }

  export enum Azubo {
    Auction = 1,
    FixedBuy = 9,
  }

  export enum Elimbo {
    FixedPrice = 0,
  }
}

export type ListingTypeFilter<
  L extends AfterbuyListingType.EBay | AfterbuyListingType.Azubo | AfterbuyListingType.Elimbo =
    | AfterbuyListingType.EBay
    | AfterbuyListingType.Azubo
    | AfterbuyListingType.Elimbo
> = ValueFilter<"ListingType", L>;
