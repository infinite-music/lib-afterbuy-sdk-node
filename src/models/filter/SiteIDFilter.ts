import { ValueFilter } from "./ValueFilter";

export enum AfterbuySiteID {
  EBayCom = 0,
  EBayCanada = 2,
  EBayUK = 3,
  EBayAustralia = 15,
  EBayAustria = 16,
  EBayBelgiumFrench = 23,
  EBayFrance = 71,
  EBayGermany = 77,
  EBayItaly = 101,
  EBayNetherlands = 146,
  EBaySpain = 186,
  EBaySwitzerland = 195,
  EBayIreland = 205,
  EBayPoland = 212,
}

export type SiteIDFilter = ValueFilter<"SiteID", AfterbuySiteID>;
