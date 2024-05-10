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
import { AfterbuySDK } from 'afterbuy-sdk';

// Initialize the SDK
const afterbuySDK = new AfterbuySDK();

// Make API calls
const response = await afterbuySDK.makeRequest('GET', '/products');
console.log(response.data);
```

## API

The Afterbuy SDK provides the following methods:

### `makeRequest(method: string, path: string, data?: any): Promise<AfterbuyResponse>`

This method makes an API request to the Afterbuy API. It takes the HTTP method, API path, and optional data as parameters and returns a promise that resolves to an `AfterbuyResponse` object.

### `getProducts(): Promise<Product[]>`

This method retrieves a list of products from the Afterbuy API. It returns a promise that resolves to an array of `Product` objects.

### `createProduct(product: Product): Promise<Product>`

This method creates a new product in the Afterbuy API. It takes a `Product` object as a parameter and returns a promise that resolves to the created `Product` object.

### `updateProduct(productId: string, product: Product): Promise<Product>`

This method updates an existing product in the Afterbuy API. It takes the product ID and a `Product` object as parameters and returns a promise that resolves to the updated `Product` object.

### `deleteProduct(productId: string): Promise<void>`

This method deletes a product from the Afterbuy API. It takes the product ID as a parameter and returns a promise that resolves to `void`.

## Examples

Here are some examples of how to use the Afterbuy SDK:

```typescript
import { AfterbuySDK, Product } from 'afterbuy-sdk';

const afterbuySDK = new AfterbuySDK();

// Get all products
const products = await afterbuySDK.getProducts();
console.log(products);

// Create a new product
const newProduct: Product = {
  name: 'New Product',
  price: 9.99,
  quantity: 10,
};
const createdProduct = await afterbuySDK.createProduct(newProduct);
console.log(createdProduct);

// Update an existing product
const updatedProduct: Product = {
  name: 'Updated Product',
  price: 14.99,
  quantity: 5,
};
const updatedProduct = await afterbuySDK.updateProduct('123456', updatedProduct);
console.log(updatedProduct);

// Delete a product
await afterbuySDK.deleteProduct('123456');
console.log('Product deleted');
```

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.# nodde-afterbuy-sdk
