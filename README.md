# Afterbuy SDK

This is a Node.js SDK for the Afterbuy API built using TypeScript. It provides a convenient way to interact with the Afterbuy API and handle API requests and responses.

## Installation

To install the Afterbuy SDK, you can use npm:

```shell
npm install afterbuy-sdk
```

## Usage

To use the Afterbuy SDK in your project, you need to import the `AfterbuySDK` class from the `afterbuy-sdk` package:

```typescript
import { AfterbuyApi } from 'afterbuy-sdk';

// Get the Afterbuy credentials, e.g. from your environment variables
const {
  AFTERBUY_ACCOUNT_TOKEN,
  AFTERBUY_PARTNER_TOKEN
} = process.env;

// Initialize the SDK
const afterbuyApi = new AfterbuyApi({
    AccountToken: AFTERBUY_ACCOUNT_TOKEN,
    PartnerToken: AFTERBUY_PARTNER_TOKEN
});

// Make API calls
const response = await afterbuyApi.getShopProducts({ MaxShopItems: 100 });
console.log(response.data);
```

## Examples

Here are some examples of how to use the Afterbuy SDK:

```typescript
import { AfterbuyApi } from 'afterbuy-sdk';
import { GetShopProductsRequest, UpdateShopProductsRequest } from 'afterbuy-sdk/requests';
import { ShopProductUpdate, SkuUpdateAction, CatalogUpdateAction, AttributeUpdateAction, BaseProductUpdateAction } from 'afterbuy-sdk/data';

// Get the Afterbuy credentials, e.g. from your environment variables
const {
  AFTERBUY_ACCOUNT_TOKEN,
  AFTERBUY_PARTNER_TOKEN
} = process.env;

// Initialize the SDK
const afterbuyApi = new AfterbuyApi({
    AccountToken: AFTERBUY_ACCOUNT_TOKEN,
    PartnerToken: AFTERBUY_PARTNER_TOKEN
});

// Collect 100 products with some filter
const getProductsRequest: GetShopProductsRequest = {
  MaxShopItems: 100,
  Filters: {
    Filter: [
      { FilterName: "ProductID", FilterValues: ["12345"] }
    ]
  }
};

const getProductsResponse = await afterbuyApi.sendRequest(getProductsRequest);
const products = getProductsResponse.data.Products.Product;

if (products.length > 0) {
  const productToUpdate = products[0];

  // Update the product
  const updateProductRequest: UpdateShopProductsRequest = {
    Products: {
      Product: [{
        ...productToUpdate,
        ProductIdent: { ProductID: productToUpdate.ProductID },
        EconomicOperatorId: 123,
        Skus: [{ UpdateAction: SkuUpdateAction.Replace, Sku: ["new-sku"] }],
        AddCatalogs: [{ UpdateAction: CatalogUpdateAction.Update, AddCatalog: [] }],
        AddAttributes: [{ UpdateAction: AttributeUpdateAction.Update, AddAttribute: [] }],
        AddBaseProducts: [{ UpdateAction: BaseProductUpdateAction.Update, AddBaseProduct: [] }],
        AdditionalDescriptionFields: { AdditionalDescriptionField: [] },
        UseEbayVariations: { Variation: [] }
      }]
    }
  };

  await afterbuyApi.sendRequest(updateProductRequest);

  // Create a new the product
  const recreateProductRequest: UpdateShopProductsRequest = {
    Products: {
      Product: [{
        ...productToUpdate,
        ProductIdent: { ProductID: productToUpdate.ProductID },
        EconomicOperatorId: 123,
        Skus: [{ UpdateAction: SkuUpdateAction.Add, Sku: ["new-sku"] }],
        AddCatalogs: [{ UpdateAction: CatalogUpdateAction.Add, AddCatalog: [] }],
        AddAttributes: [{ UpdateAction: AttributeUpdateAction.Add, AddAttribute: [] }],
        AddBaseProducts: [{ UpdateAction: BaseProductUpdateAction.Update, AddBaseProduct: [] }],
        AdditionalDescriptionFields: { AdditionalDescriptionField: [] },
        UseEbayVariations: { Variation: [] }
      }]
    }
  };

  await afterbuyApi.sendRequest(recreateProductRequest);
}
```

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.# nodde-afterbuy-sdk
