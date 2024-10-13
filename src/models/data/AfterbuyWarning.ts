/**
 * @enum {number} AfterbuyWarningCode
 * Enum representing various warning codes from Afterbuy.
 */
export enum AfterbuyWarningCode {
  /** Warning message returned for testing purposes only. */
  TestWarning = 1,
  /** The requested product could not be found. */
  ProductNotFound = 2,
  /** No product identification found. */
  NoProductIdentificationFound = 3,
  /** Product could not be created, product name is missing! */
  ProductCouldNotBeCreated = 4,
  /** Catalogue not found. */
  CatalogueNotFound = 5,
  /** Catalogue assignment already exists. */
  CatalogueAssignmentAlreadyExists = 6,
  /** Attribute could not be assigned. Attribute value was not specified. */
  AttributeCouldNotBeAssigned = 8,
  /** Attribute could not be found. No attribute could be assigned to the specified attribute name. */
  AttributeCouldNotBeFound = 9,
  /** Attribute could not be assigned. No attribute name was transferred. */
  AttributeCouldNotBeAssigned2 = 10,
  /** Attribute is already assigned to the product. */
  AttributeIsAlreadyAssignedToTheProduct = 11,
  /** The process could not be identified. */
  TheProcessCouldNotBeIdentified = 12,
  /** No process identification transferred. */
  NoProcessIdentificationTransferred = 13,
  /** Wrong ImageSource. */
  WrongImageSource = 14,
  /** A base product can only contain a maximum of 15 products. */
  BaseProductCanOnlyContainMax15Products = 15,
  /** Only standard products can be assigned to a base product. */
  OnlyStandardProductsCanBeAssignedToBaseProduct = 16,
  /** Logistician is not assigned to the user. Update failed. */
  InvalidLogisticianAssignment = 44,
  /** The ProduktID is not assigned to the user. Update failed. */
  ProductIsInvalid = 45,
  /** ProductID not found or the quantity is less than or equal to 0. */
  ProductIDNotFoundOrQuantityLessThanOrEqualTo0 = 46,
  /** The product is no longer available or the ProductID is incorrect. */
  ProductNoLongerAvailableOrProductIDIncorrect = 47,
  /** The product was not found in the database. Check the ProductID. */
  ProductNotFoundInTheDatabase = 48,
  /** The product could not be deleted. ProductID is incorrect. */
  ProductCouldNotBeDeleted = 49,
  /** The entry could not be updated. The ID is invalid. */
  EntryCouldNotBeUpdated = 50,
  /** No catalogue ID was transferred. There must be at least 1 ID tag (<CatalogID>). */
  NoCatalogueIDTransferred = 56,
  /** No catalogue name was passed. There must be a name tag (<CatalogName>). */
  NoCatalogueNameTransferred = 57,
  /** Too many catalogue levels passed. A maximum of 50 levels are supported, all others were not processed. */
  TooManyCatalogueLevelsPassed = 58,
  /** The value from "ValidForProdID" could not be assigned to a product. Please check if the value corresponds to a valid Afterbuy ProductID. */
  ValidForProdIDCouldNotBeAssignedToProduct = 61,
  /** Value in "VariationLabel" is too long. The value for "VariationLabel" may contain a maximum of 50 characters. */
  ValueInVariationLabelIsTooLong = 62,
  /** Additional field "Shop 2.0 Beschreibungsfeld" could not be created. Maximum number of 10 fields was reached. */
  AdditionalFieldCouldNotBeCreated = 63,
  /** There is already an additional field (Shop 2.0 Beschreibungsfeld) with the transferred "Name". */
  AdditionalFieldAlreadyExistsWithName = 64,
  /** An error occurred with your update request, please try again. */
  UpdateRequestFailed = 65,
  /** Too many variation specifications given. No specification has been created. */
  TooManyVariationSpecificationsGiven = 68,
  /** Invalid value for ManufacturerStandardProductIDType. Allowed values: ISBN, UPC, EAN, ASIN, GTIN. */
  InvalidValueInManufacturerStandardProductIDType = 69,
  /** You are using the wrong domain for your call to our XML interface. Please make the requests via https://api.afterbuy.de/afterbuy/abinterface.aspx */
  URLReferralNoLongerValid = 70,
  /** The property name specified for an auto part is invalid. The property has been ignored. */
  AutoPartsPartsFitmentPropertyNameIsInvalid = 71,
  /** The property value specified for a car part is empty. The property has been ignored. */
  AutoPartsPartsFitmentPropertyValueIsEmpty = 72,
  /** The property name specified for a car part exists multiple times. The property has been ignored. */
  AutoPartsPartsFitmentPropertyNameExistsMultipleTimes = 73,
  /** The properties specified for car parts could not be saved. */
  CarPartsPartsFitmentPropertiesNotSaved = 74,
  /** The properties specified for car parts could not be saved, an invalid "UpdateAction" was used. */
  InvalidUpdateActionForCarPartsPartsFitment = 75,
  /** "ManufacturerStandardProductIDValue" does not contain a valid GTIN (EAN, ISBN, UPC). */
  NoValidValueForManufacturerStandardProductIDValue = 81,
  /** "GoogleProductCategory" has a limit of 255 characters. */
  GoogleProductCategoryIsTooLong = 82,
  /** "ManufacturerPartNumber" has a maximum length of 100 characters. */
  ManufacturerPartNumberIsTooLong = 83,
  /** Invalid value for Condition. Valid values are: 0 = none, 1 = new, 2 = used, 3 = refurbished. */
  ProductConditionIsInvalid = 84,
}

/**
 * Represents a warning message from Afterbuy.
 */
export interface AfterbuyWarning {
  /** The code associated with the warning. */
  WarningCode: AfterbuyWarningCode;
  /** A brief description of the warning. */
  WarningDescription: string;
  /** An optional detailed description of the warning. */
  WarningLongDescription?: string;
}
