import { EventEmitter } from "events";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import {
  AfterbuyRequest,
  AfterbuyRequestData,
  AfterbuyRequestFull,
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
  UpdateCatalogsRequest,
  UpdateCatalogsResponse,
  UpdateProductsRequest,
  UpdateProductsResponse,
  UpdateSoldItemsRequest,
  UpdateSoldItemsResponse,
} from "../models";
import { AfterbuyApiOptions } from "./AfterbuyApiOptions";
import { AfterbuyApiResponse } from "./AfterbuyApiResponse";
import { AfterbuyException } from "./AfterbuyException";

export class AfterbuyApi extends EventEmitter<{
  request: [RequestInit];
  response: [AfterbuyApiResponse<any>];
}> {
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
    "Afterbuy.Result.NewCatalogs.NewCatalog",
    "Afterbuy.Result.CatalogsNotDeleted.CatalogNotDeleted",
    "Afterbuy.Result.NewProducts.NewProduct",
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
    super();
    if (options.apiUrl) this.apiUrl = options.apiUrl;
  }

  public async sendRequest(request: GetAfterBuyTimeRequest): Promise<AfterbuyApiResponse<GetAfterbuyTimeResponse>>;
  public async sendRequest(request: GetListerHistoryRequest): Promise<AfterbuyApiResponse<GetListerHistoryResponse>>;
  public async sendRequest(request: GetMailTemplatesRequest): Promise<AfterbuyApiResponse<GetMailTemplatesResponse>>;
  public async sendRequest(
    request: GetPaymentServicesRequest
  ): Promise<AfterbuyApiResponse<GetPaymentServicesResponse>>;
  public async sendRequest(
    request: GetProductDiscountsRequest
  ): Promise<AfterbuyApiResponse<GetProductDiscountsResponse>>;
  public async sendRequest(request: GetShippingCostRequest): Promise<AfterbuyApiResponse<GetShippingCostResponse>>;
  public async sendRequest(
    request: GetShippingServicesRequest
  ): Promise<AfterbuyApiResponse<GetShippingServicesResponse>>;
  public async sendRequest(request: GetShopCatalogsRequest): Promise<AfterbuyApiResponse<GetShopCatalogsResponse>>;
  public async sendRequest(request: GetShopProductsRequest): Promise<AfterbuyApiResponse<GetShopProductsResponse>>;
  public async sendRequest(request: GetSoldItemsRequest): Promise<AfterbuyApiResponse<GetSoldItemsResponse>>;
  public async sendRequest(request: GetStockInfoRequest): Promise<AfterbuyApiResponse<GetStockInfoResponse>>;
  public async sendRequest(
    request: GetTranslatedMailTemplateRequest
  ): Promise<AfterbuyApiResponse<GetTranslatedMailTemplateResponse>>;
  public async sendRequest(
    request: GetUserDefinedFlagsRequest
  ): Promise<AfterbuyApiResponse<GetUserDefinedFlagsResponse>>;
  public async sendRequest<UpdateAction extends UpdateCatalogsRequest.UpdateAction>(
    request: UpdateCatalogsRequest<UpdateAction>
  ): Promise<AfterbuyApiResponse<UpdateCatalogsResponse>>;
  public async sendRequest(request: UpdateProductsRequest): Promise<AfterbuyApiResponse<UpdateProductsResponse>>;
  public async sendRequest(request: UpdateSoldItemsRequest): Promise<AfterbuyApiResponse<UpdateSoldItemsResponse>>;
  public async sendRequest<
    Request extends AfterbuyRequest<string, any>,
    Response extends AfterbuyResponse<Request["AfterbuyGlobal"]["CallName"], any>
  >({ AfterbuyGlobal, ...requestData }: Request): Promise<AfterbuyApiResponse<Response>> {
    const { apiUrl, headers } = this;

    const requestBuilder = this.extendRequest(AfterbuyGlobal, requestData);
    const requestBody = '<?xml version="1.0" encoding="utf-8"?>' + this.buildRequest(requestBuilder);
    const request: RequestInit = { method: "POST", headers, body: requestBody };

    this.emit("request", request);

    const response = await fetch(apiUrl, request);
    const { ok, status, statusText } = response;
    const responseBody = await response.text();

    const data = this.parseResponse<Response>(responseBody);

    const result: AfterbuyApiResponse<Response> = {
      url: apiUrl,
      request,
      response,
      ok,
      status,
      statusText,
      data,
    };

    this.emit("response", result);

    if (!ok || data.Afterbuy.CallStatus === "Error") throw new AfterbuyException(result);
    else return result;
  }

  public getAfterbuyTime(
    data: AfterbuyRequestData<GetAfterBuyTimeRequest> = {},
    DetailLevel: GetAfterBuyTimeRequest.DetailLevel = GetAfterBuyTimeRequest.DetailLevel.None
  ): Promise<AfterbuyApiResponse<GetAfterbuyTimeResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetAfterbuyTime", DetailLevel },
      ...data,
    });
  }

  public getListerHistory(
    data: AfterbuyRequestData<GetListerHistoryRequest>,
    DetailLevel: GetListerHistoryRequest.DetailLevel = GetListerHistoryRequest.DetailLevel.None
  ): Promise<AfterbuyApiResponse<GetListerHistoryResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetListerHistory", DetailLevel },
      ...data,
    });
  }

  public getMailTemplates(
    data: AfterbuyRequestData<GetMailTemplatesRequest> = {},
    DetailLevel: GetMailTemplatesRequest.DetailLevel = GetMailTemplatesRequest.DetailLevel.Base
  ): Promise<AfterbuyApiResponse<GetMailTemplatesResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetMailTemplates", DetailLevel },
      ...data,
    });
  }

  public getPaymentServices(
    data: AfterbuyRequestData<GetPaymentServicesRequest> = {},
    DetailLevel: GetPaymentServicesRequest.DetailLevel = GetPaymentServicesRequest.DetailLevel.All
  ): Promise<AfterbuyApiResponse<GetPaymentServicesResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetPaymentServices", DetailLevel },
      ...data,
    });
  }

  public getProductDiscounts(
    data: AfterbuyRequestData<GetProductDiscountsRequest>,
    DetailLevel: GetProductDiscountsRequest.DetailLevel = GetProductDiscountsRequest.DetailLevel.All
  ): Promise<AfterbuyApiResponse<GetProductDiscountsResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetProductDiscounts", DetailLevel },
      ...data,
    });
  }

  public getShippingCost(
    data: AfterbuyRequestData<GetShippingCostRequest>,
    DetailLevel: GetShippingCostRequest.DetailLevel = GetShippingCostRequest.DetailLevel.None
  ): Promise<AfterbuyApiResponse<GetShippingCostResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetShippingCost", DetailLevel },
      ...data,
    });
  }

  public getShippingServices(
    data: AfterbuyRequestData<GetShippingServicesRequest>,
    DetailLevel: GetShippingServicesRequest.DetailLevel = GetShippingServicesRequest.DetailLevel.All
  ): Promise<AfterbuyApiResponse<GetShippingServicesResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetShippingServices", DetailLevel },
      ...data,
    });
  }

  public getShopCatalogs(
    data: AfterbuyRequestData<GetShopCatalogsRequest>,
    DetailLevel: GetShopCatalogsRequest.DetailLevel = GetShopCatalogsRequest.DetailLevel.Base
  ): Promise<AfterbuyApiResponse<GetShopCatalogsResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetShopCatalogs", DetailLevel },
      ...data,
    });
  }

  public getShopProducts(
    data: AfterbuyRequestData<GetShopProductsRequest>,
    DetailLevel: GetShopProductsRequest.DetailLevel = GetShopProductsRequest.DetailLevel.All
  ): Promise<AfterbuyApiResponse<GetShopProductsResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetShopProducts", DetailLevel },
      ...data,
    });
  }

  public getSoldItems(
    data: AfterbuyRequestData<GetSoldItemsRequest>,
    DetailLevel: GetSoldItemsRequest.DetailLevel = GetSoldItemsRequest.DetailLevel.Operation
  ): Promise<AfterbuyApiResponse<GetSoldItemsResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetSoldItems", DetailLevel },
      ...data,
    });
  }

  public getStockInfo(
    data: AfterbuyRequestData<GetStockInfoRequest>,
    DetailLevel: GetStockInfoRequest.DetailLevel = GetStockInfoRequest.DetailLevel.NoAvailability
  ): Promise<AfterbuyApiResponse<GetStockInfoResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetStockInfo", DetailLevel },
      ...data,
    });
  }

  public getTranslatedMailTemplate(
    data: AfterbuyRequestData<GetTranslatedMailTemplateRequest>,
    DetailLevel: GetTranslatedMailTemplateRequest.DetailLevel = GetTranslatedMailTemplateRequest.DetailLevel.All
  ): Promise<AfterbuyApiResponse<GetTranslatedMailTemplateResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetTranslatedMailTemplate", DetailLevel },
      ...data,
    });
  }

  public getUserDefinedFlags(
    data: AfterbuyRequestData<GetUserDefinedFlagsRequest>,
    DetailLevel: GetUserDefinedFlagsRequest.DetailLevel = GetUserDefinedFlagsRequest.DetailLevel.None
  ): Promise<AfterbuyApiResponse<GetUserDefinedFlagsResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "GetUserDefinedFlags", DetailLevel },
      ...data,
    });
  }

  public updateCatalogs<UpdateAction extends UpdateCatalogsRequest.UpdateAction>(
    data: AfterbuyRequestData<UpdateCatalogsRequest<UpdateAction>>,
    DetailLevel: UpdateCatalogsRequest.DetailLevel = UpdateCatalogsRequest.DetailLevel.None
  ): Promise<AfterbuyApiResponse<UpdateCatalogsResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "UpdateCatalogs", DetailLevel },
      ...data,
    });
  }

  public updateProducts(
    data: AfterbuyRequestData<UpdateProductsRequest>,
    DetailLevel: UpdateProductsRequest.DetailLevel = UpdateProductsRequest.DetailLevel.None
  ): Promise<AfterbuyApiResponse<UpdateProductsResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "UpdateShopProducts", DetailLevel },
      ...data,
    });
  }

  public updateSoldItems(
    data: AfterbuyRequestData<UpdateSoldItemsRequest>,
    DetailLevel: UpdateSoldItemsRequest.DetailLevel = UpdateSoldItemsRequest.DetailLevel.None
  ): Promise<AfterbuyApiResponse<UpdateSoldItemsResponse>> {
    return this.sendRequest({
      AfterbuyGlobal: { CallName: "UpdateSoldItems", DetailLevel },
      ...data,
    });
  }

  private extendRequest<Request extends AfterbuyRequest<string, any>>(
    AfterbuyGlobal: Request["AfterbuyGlobal"],
    data: Omit<Request, "AfterbuyGlobal">
  ) {
    const { AccountToken, PartnerToken, ErrorLanguage } = this.options;

    return this.sanitizeRequest({
      Request: {
        AfterbuyGlobal: { ...AfterbuyGlobal, AccountToken, PartnerToken, ErrorLanguage },
        ...data,
      },
    }) as AfterbuyRequestFull<Request>;
  }

  private buildRequest<T>(request: T) {
    return this.xmlBuilder.build(request);
  }

  private parseResponse<T>(xml: string) {
    return this.sanitizeResponse(this.xmlParser.parse(xml)) as T;
  }

  private sanitizeRequest<T>(request: T): T {
    if (request === null || request === undefined) return request;
    if (Array.isArray(request)) return request.map((item) => this.sanitizeRequest(item)) as T;

    switch (typeof request) {
      case "boolean":
        return (request ? 1 : 0) as T;
      case "number":
        const localeStr = request.toLocaleString("de");
        return request.toString() === localeStr ? request : (localeStr as T);
      case "object":
        return (Object.keys(request) as (keyof T)[]).reduce((carry, key) => {
          const val = request[key];
          carry[key] = this.sanitizeRequest(val);
          return carry;
        }, {} as T);
      default:
        return request;
    }
  }

  private sanitizeResponse<T>(response: T): T {
    if (response === null || response === undefined) return response;
    if (Array.isArray(response)) return response.map((item) => this.sanitizeResponse(item)) as T;

    switch (typeof response) {
      case "string":
        if (response === "true" || response === "false") return (response === "true" ? true : false) as T;
        return response;
      case "object":
        return (Object.keys(response) as (keyof T)[]).reduce((carry, key) => {
          const val = response[key];
          carry[key] = this.sanitizeResponse(val);
          return carry;
        }, {} as T);
      default:
        return response;
    }
  }
}
