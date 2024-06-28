import { XMLBuilder, XMLParser } from "fast-xml-parser";
import {
  AfterbuyRequest,
  AfterbuyResponse,
  GetAfterBuyTimeRequest,
  GetAfterbuyTimeResponse,
  GetListerHistoryRequest,
  GetListerHistoryResponse,
  GetMailTemplatesRequest,
  GetMailTemplatesResponse,
  GetPaymentServicesRequest,
  GetPaymentServicesResponse,
  GetProductDiscountsRequest,
  GetProductDiscountsResponse,
  GetShippingCostRequest,
  GetShippingCostResponse,
  GetShippingServicesRequest,
  GetShippingServicesResponse,
  GetShopCatalogsRequest,
  GetShopCatalogsResponse,
  GetShopProductsRequest,
  GetShopProductsResponse,
  GetSoldItemsRequest,
  GetSoldItemsResponse,
  GetStockInfoRequest,
  GetStockInfoResponse,
  GetTranslatedMailTemplateRequest,
  GetTranslatedMailTemplateResponse,
  GetUserDefinedFlagsRequest,
  GetUserDefinedFlagsResponse,
} from "../models";
import { AfterbuyRequestData, AfterbuyRequestFull } from "../models/AfterbuyRequest";
import { AfterbuyApiOptions } from "./AfterbuyApiOptions";
import { AfterbuyException } from "./AfterbuyException";

export class AfterbuyApi {
  private static arrayResponsePaths = [
    "Afterbuy.Result.ListedItems.ListedItem",
    "Afterbuy.Result.MailTemplates.MailTemplate",
    "Afterbuy.Result.PaymentService",
    "Afterbuy.Result.ProductDiscounts.ProductDiscount",
    "Afterbuy.Result.ShippingService.ShippingMethods.ShippingMethod",
    "Afterbuy.Result.ShippingServices.ShippingService",
    "Afterbuy.Result.ShippingServices.ShippingService.ShippingMethods.ShippingMethod",
    "Afterbuy.Result.ShippingServices.ShippingService.ShippingMethods.ShippingMethod.WeightDefinitions.WeightDefinitions",
    "Afterbuy.Result.Catalogs.Catalog",
    "Afterbuy.Result.Catalogs.Catalog.CatalogProducts.ProductID",
    "Afterbuy.Result.Products.Product",
    "Afterbuy.Result.Products.BaseProducts.BaseProduct",
    "Afterbuy.Result.Products.Tags.Tag",
    "Afterbuy.Result.Products.ScaledDiscounts.ScaledDiscount",
    "Afterbuy.Result.Products.Skus.Sku",
    "Afterbuy.Result.Products.ProductPictures.ProductPicture",
    "Afterbuy.Result.Products.Catalogs.CatalogID",
    "Afterbuy.Result.Products.Attributes.Attribut",
    "Afterbuy.Result.Products.PartsFitment.PartsProperties.PartsProperty",
    "Afterbuy.Result.Products.Features.Feature",
    "Afterbuy.Result.Products.AdditionalDescriptionFields.AdditionalDescriptionField",
    "Afterbuy.Result.Products.AdditionalPrices.AdditionalPrice",
    "Afterbuy.Result.Products.Discounts.Discount",
    "Afterbuy.Result.Products.Orders.Order",
    "Afterbuy.Result.Products.Orders.Order.Tags.Tag",
    "Afterbuy.Result.Products.Orders.Order.SoldItems.SoldItem",
    "Afterbuy.Result.Products.Orders.Order.SoldItems.SoldItem.SoldItemAttributes.SoldItemAttribute",
    "Afterbuy.Result.Products.Orders.Order.PaymentInfo.PayoutIds.PayoutId",
    "Afterbuy.Result.Products.Orders.Order.ShippingInfo.ParcelLabels.ParcelLabel",
    "Afterbuy.Result.UserDefinedFlags.UserDefinedFlag",
    "Afterbuy.Result.Versions.Version",
  ];

  private apiUrl = "https://api.afterbuy.de/afterbuy/ABInterface.aspx";
  private headers = { "Content-Type": "application/xml" };
  private xmlBuilder = new XMLBuilder({
    oneListGroup: true,
  });
  private xmlParser = new XMLParser({
    ignorePiTags: true,
    isArray: (tagName, jPath) => tagName === "ProductPicture" || AfterbuyApi.arrayResponsePaths.includes(jPath),
  });

  public constructor(private options: AfterbuyApiOptions) {
    if (options.apiUrl) this.apiUrl = options.apiUrl;
  }

  public async sendRequest(request: GetAfterBuyTimeRequest): Promise<GetAfterbuyTimeResponse>;
  public async sendRequest(request: GetListerHistoryRequest): Promise<GetListerHistoryResponse>;
  public async sendRequest(request: GetMailTemplatesRequest): Promise<GetMailTemplatesResponse>;
  public async sendRequest(request: GetPaymentServicesRequest): Promise<GetPaymentServicesResponse>;
  public async sendRequest(request: GetProductDiscountsRequest): Promise<GetProductDiscountsResponse>;
  public async sendRequest(request: GetShippingCostRequest): Promise<GetShippingCostResponse>;
  public async sendRequest(request: GetShippingServicesRequest): Promise<GetShippingServicesResponse>;
  public async sendRequest(request: GetShopCatalogsRequest): Promise<GetShopCatalogsResponse>;
  public async sendRequest(request: GetShopProductsRequest): Promise<GetShopProductsResponse>;
  public async sendRequest(request: GetSoldItemsRequest): Promise<GetSoldItemsResponse>;
  public async sendRequest(request: GetStockInfoRequest): Promise<GetStockInfoResponse>;
  public async sendRequest(request: GetTranslatedMailTemplateRequest): Promise<GetTranslatedMailTemplateResponse>;
  public async sendRequest(request: GetUserDefinedFlagsRequest): Promise<GetUserDefinedFlagsResponse>;
  public async sendRequest<
    Request extends AfterbuyRequest<string, any>,
    Response extends AfterbuyResponse<Request["AfterbuyGlobal"]["CallName"], any>
  >({ AfterbuyGlobal, ...data }: Request): Promise<Response> {
    const { apiUrl, headers } = this;

    const request = this.extendRequest(AfterbuyGlobal, data);
    const body = '<?xml version="1.0" encoding="utf-8"?>' + this.buildRequest(request);

    const response = await fetch(apiUrl, { method: "POST", headers, body });
    const responseText = await response.text();

    const responseData = this.parseResponse<Response>(responseText);

    if (responseData.Afterbuy.CallStatus === "Success") return responseData;
    else throw new AfterbuyException(responseText, responseData);
  }

  public getAfterbuyTime(
    data: AfterbuyRequestData<GetAfterBuyTimeRequest> = {},
    DetailLevel: GetAfterBuyTimeRequest.DetailLevel = GetAfterBuyTimeRequest.DetailLevel.None
  ): Promise<GetAfterbuyTimeResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetAfterbuyTime", DetailLevel },
      ...data,
    });
  }

  public getListerHistory(
    data: AfterbuyRequestData<GetListerHistoryRequest>,
    DetailLevel: GetListerHistoryRequest.DetailLevel = GetListerHistoryRequest.DetailLevel.None
  ): Promise<GetListerHistoryResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetListerHistory", DetailLevel },
      ...data,
    });
  }

  public getMailTemplates(
    data: AfterbuyRequestData<GetMailTemplatesRequest> = {},
    DetailLevel: GetMailTemplatesRequest.DetailLevel = GetMailTemplatesRequest.DetailLevel.Base
  ): Promise<GetMailTemplatesResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetMailTemplates", DetailLevel },
      ...data,
    });
  }

  public getPaymentServices(
    data: AfterbuyRequestData<GetPaymentServicesRequest> = {},
    DetailLevel: GetPaymentServicesRequest.DetailLevel = GetPaymentServicesRequest.DetailLevel.All
  ): Promise<GetPaymentServicesResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetPaymentServices", DetailLevel },
      ...data,
    });
  }

  public getProductDiscounts(
    data: AfterbuyRequestData<GetProductDiscountsRequest>,
    DetailLevel: GetProductDiscountsRequest.DetailLevel = GetProductDiscountsRequest.DetailLevel.All
  ): Promise<GetProductDiscountsResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetProductDiscounts", DetailLevel },
      ...data,
    });
  }

  public getShippingCost(
    data: AfterbuyRequestData<GetShippingCostRequest>,
    DetailLevel: GetShippingCostRequest.DetailLevel = GetShippingCostRequest.DetailLevel.None
  ): Promise<GetShippingCostResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetShippingCost", DetailLevel },
      ...data,
    });
  }

  public getShippingServices(
    data: AfterbuyRequestData<GetShippingServicesRequest>,
    DetailLevel: GetShippingServicesRequest.DetailLevel = GetShippingServicesRequest.DetailLevel.All
  ): Promise<GetShippingServicesResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetShippingServices", DetailLevel },
      ...data,
    });
  }

  public getShopCatalogs(
    data: AfterbuyRequestData<GetShopCatalogsRequest>,
    DetailLevel: GetShopCatalogsRequest.DetailLevel = GetShopCatalogsRequest.DetailLevel.Base
  ): Promise<GetShopCatalogsResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetShopCatalogs", DetailLevel },
      ...data,
    });
  }

  public getShopProducts(
    data: AfterbuyRequestData<GetShopProductsRequest>,
    DetailLevel: GetShopProductsRequest.DetailLevel = GetShopProductsRequest.DetailLevel.All
  ): Promise<GetShopProductsResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetShopProducts", DetailLevel },
      ...data,
    });
  }

  public getSoldItems(
    data: AfterbuyRequestData<GetSoldItemsRequest>,
    DetailLevel: GetSoldItemsRequest.DetailLevel = GetSoldItemsRequest.DetailLevel.Operation
  ): Promise<GetSoldItemsResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetSoldItems", DetailLevel },
      ...data,
    });
  }

  public getStockInfo(
    data: AfterbuyRequestData<GetStockInfoRequest>,
    DetailLevel: GetStockInfoRequest.DetailLevel = GetStockInfoRequest.DetailLevel.NoAvailability
  ): Promise<GetStockInfoResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetStockInfo", DetailLevel },
      ...data,
    });
  }

  public getTranslatedMailTemplate(
    data: AfterbuyRequestData<GetTranslatedMailTemplateRequest>,
    DetailLevel: GetTranslatedMailTemplateRequest.DetailLevel = GetTranslatedMailTemplateRequest.DetailLevel.All
  ): Promise<GetTranslatedMailTemplateResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetTranslatedMailTemplate", DetailLevel },
      ...data,
    });
  }

  public getUserDefinedFlags(
    data: AfterbuyRequestData<GetUserDefinedFlagsRequest>,
    DetailLevel: GetUserDefinedFlagsRequest.DetailLevel = GetUserDefinedFlagsRequest.DetailLevel.None
  ): Promise<GetUserDefinedFlagsResponse> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetUserDefinedFlags", DetailLevel },
      ...data,
    });
  }

  private extendRequest<Request extends AfterbuyRequest<string, any>>(
    AfterbuyGlobal: Request["AfterbuyGlobal"],
    data: Omit<Request, "AfterbuyGlobal">
  ) {
    const { AccountToken, PartnerToken, ErrorLanguage } = this.options;

    return {
      Request: {
        AfterbuyGlobal: { ...AfterbuyGlobal, AccountToken, PartnerToken, ErrorLanguage },
        ...data,
      },
    } as AfterbuyRequestFull<Request>;
  }

  private buildRequest<T>(request: T) {
    return this.xmlBuilder.build(request);
  }

  private parseResponse<T>(xml: string) {
    return this.xmlParser.parse(xml) as T;
  }
}
