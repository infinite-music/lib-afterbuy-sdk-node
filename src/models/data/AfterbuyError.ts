/**
 * Enum representing various Afterbuy error codes.
 */
export enum AfterbuyErrorCode {
  /** XML request has no data. Check your request. */
  EmptyRequest = 1,
  /** Tag <CallName> is empty or missing. */
  MissingCallName = 3,
  /** Request contains Errors */
  RequestParseError = 2,
  /** PartnerID is missing or is not numeric. */
  MissingPartnerID = 4,
  /** Partner password is missing or is empty. */
  MissingPartnerPassword = 5,
  /** UserID is missing or is empty. */
  MissingUserID = 6,
  /** User password is missing or is empty. */
  MissingUserPassword = 7,
  /** Partner data is invalid (Wrong password?) */
  InvalidPartnerData = 8,
  /** Unsupported CallName. */
  UnsupportedCallName = 12,
  /** UserID not found. */
  UserIDNotFound = 9,
  /** The provided user is not authorised for the use of the interface. */
  UserNotAuthorized = 10,
  /** The provided user has been blocked on Afterbuy. */
  UserBlocked = 11,
  /** XML Interface is currently not available. Please try again later. */
  XMLInterfaceNotAvailable = 13,
  /** This action is currently not available. Please try again later. */
  ActionNotAvailable = 14,
  /** No items found. */
  NoItemsFound = 15,
  /** The value for 'MaxItems' must be between 1 and 250. */
  InvalidMaxItemsValue = 16,
  /** The maximum value for ItemIDFrom must not be greater than 2147483647. */
  InvalidItemIDFromValue = 17,
  /** Invalid value in 'DetailLevel'. */
  InvalidDetailLevelValue = 18,
  /** No product identification was transferred. There must be at least 1 identification tag (<ProductID><Anr><EAN>). */
  NoProductIdentificationTransferred = 19,
  /** Only a maximum of 500 products can be returned per query. */
  MaxProductsReturnedExceeded = 20,
  /** The value for 'MaxCatalogs' must be between 1 and 200. */
  InvalidMaxCatalogsValue = 21,
  /** The maximum value for 'CatalogIDFrom' must not be greater than 2147483647. */
  InvalidCatalogIDFromValue = 22,
  /** The maximum value for 'CatalogID' must not be greater than 2147483647. */
  InvalidCatalogIDValue = 23,
  /** No catalogues were found. */
  NoCataloguesFound = 24,
  /** No shipping groups found. */
  NoShippingGroupsFound = 25,
  /** No products handed over. */
  NoProductsHandedOver = 26,
  /** Shipping costs could not be determined. */
  ShippingCostsNotDetermined = 27,
  /** No filter entered. */
  NoFilterEntered = 28,
  /** Incorrect value in 'MaxHistoryItems'. Value must be between 1 and 500. */
  InvalidMaxHistoryItemsValue = 29,
  /** No filter or no valid filter found. */
  NoValidFilterFound = 30,
  /** The value for 'MaxSoldItems' must be between 1 and 500. */
  InvalidMaxSoldItemsValue = 31,
  /** No process identification was provided. */
  NoProcessIdentificationProvided = 32,
  /** No operations could be identified. */
  NoOperationsIdentified = 33,
  /** No mail template found. */
  NoMailTemplateFound = 34,
  /** The PartnerID is not approved for the interface. */
  PartnerIDNotApproved = 35,
  /** A maximum of 5 filters are permitted. */
  MaxFiltersExceeded = 36,
  /** No text transmitted. */
  NoTextTransmitted = 37,
  /** Function not permitted for your PartnerID. */
  FunctionNotPermitted = 38,
  /** No seller and / or no InkassoID specified. */
  NoSellerOrInkassoIDSpecified = 39,
  /** The seller is not cleared for encashment. */
  SellerNotClearedForEncashment = 40,
  /** The duration cannot be changed. Possible reasons: Bids have already been placed, there are active price offers, the offer ends in 12 hours, the item is a shop item, or it is an item in display format. */
  ChangeOfDurationNotPossible1 = 41,
  /** It is not possible to change the duration. Please check the auction start time, the end time and the auction type. Changing the duration is only possible for auctions, buy-it-now and power auctions. */
  ChangeOfDurationNotPossible2 = 42,
  /** The filter value for 'ValueFrom' or 'ValueTo' is too large. */
  InvalidFilterValue = 43,
  /** The specified LogistikID is not assigned to the user account. */
  InvalidLogisticsLink = 44,
  /** Error while creating the catalogue display. */
  ErrorCreatingCatalogueDisplay = 45,
  /** Shopping cart SessionID was not transferred. */
  MissingShoppingCartSessionID = 46,
  /** No products in the shopping cart. */
  NoProductsInShoppingCart = 47,
  /** No products have been transferred to add. */
  NoProductsToAdd = 48,
  /** DeleteMode was not passed or the value is wrong. Possible values are: 'all', 'requested'. */
  InvalidDeleteModeValue = 49,
  /** A maximum of 500 filter values are permitted. */
  MaxFilterValuesExceeded = 50,
  /** No versions found within the filter criteria. */
  NoVersionsFound = 51,
  /** This function is currently not available. Please try again later. */
  FunctionNotAvailable = 52,
  /** Required data is missing. OrderID or ItemID not available. */
  RequiredDataMissing1 = 59,
  /** The interface is disabled. The interface has been cancelled manually. */
  InterfaceDisabled = 60,
  /** Required data is missing. No product IDs were transferred. */
  RequiredDataMissing2 = 61,
  /** No cross-selling catalogue specified in the product. */
  NoCrossSellingCatalogueSpecified = 62,
  /** The specified value for SiteID is invalid. Valid SiteIDs are:US (0), CA (2), UK (3), AU (15), AT (16), BEFR (23), FR (71), DE (77), Motors (100), IT (101), BENL (123), NL (146), ES (186), CH (193), HK (201), IN (203), IE (205), MY (207), CAFR (210), PH (211), PL (212), SG (216) */
  InvalidSiteIDValue = 63,
  /** The filters 'LevelFrom' and 'LevelTo' cannot be used together with 'LevelValue'. */
  InvalidLevelFilterCombination = 70,
  /** No Afterbuy account name is transferred. Access is only possible with the account name. */
  NoAfterbuyAccountNameTransferred = 71,
  /** The specified Afterbuy account name could not be identified. */
  AfterbuyAccountNameNotIdentified = 72,
  /** Your query does not contain any updatable data. */
  NoUpdatableDataInQuery = 74,
  /** The maximum number for the update call has been exceeded. The request was not processed. */
  MaxUpdateCallExceeded = 75,
  /** Attributes could not be updated. The attributes were not processed. */
  AttributesNotUpdated = 98,
  /** At least one of the required item IDs is missing from the request. Importing package label data has failed at all. */
  MissingItemID = 3001,
  /** At least one of the mandatory package numbers is missing from the request or is out of its valid range. Importing package label data has failed at all. */
  MissingPackageNumber = 3002,
  /** At least one of the package numbers is not specified in the correct order. The package numbers must be specified in ascending order. */
  InvalidPackageNumbering = 3003,
  /** The database update has failed for one or more package label data. Importing package label data has failed at all. */
  DatabaseUpdateFailed = 3004,
}

/**
 * Represents an error returned by the Afterbuy API.
 */
export interface AfterbuyError {
  /** The error code associated with the error. */
  ErrorCode: AfterbuyErrorCode;
  /** A short description of the error. */
  ErrorDescription: string;
  /** A detailed description of the error (optional). */
  ErrorLongDescription?: string;
}
