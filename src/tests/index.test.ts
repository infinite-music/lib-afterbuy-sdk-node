import "dotenv/config";
import { AfterbuyApi } from "../api";

const { AFTERBUY_ACCOUNT_TOKEN = "", AFTERBUY_PARTNER_TOKEN = "" } = process.env;

describe("Test API", () => {
  const api = new AfterbuyApi({
    AccountToken: AFTERBUY_ACCOUNT_TOKEN,
    PartnerToken: AFTERBUY_PARTNER_TOKEN,
  });

  test("Test API", async () => {
    const storageLocations: string[] = [];
    let page = 1;

    while (true) {
      const response = await api.getShopProducts({
        MaxShopItems: 250,
        SuppressBaseProductRelatedData: 1,
        PaginationEnabled: 1,
        PageNumber: page++,
        DataFilter: {
          Filter: [
            {
              FilterName: "DateFilter",
              FilterValues: { DateFrom: "2024-08-01", DateTo: "2024-10-20", FilterValue: "ModDate" },
            },
          ],
        },
      });
      storageLocations.push(
        ...response.data.Afterbuy.Result.Products.Product.map((product) => product.Stocklocation_2 ?? "")
      );

      if (!response.data.Afterbuy.Result.HasMoreProducts) {
        break;
      }
    }
    console.log(storageLocations);
  });
});
