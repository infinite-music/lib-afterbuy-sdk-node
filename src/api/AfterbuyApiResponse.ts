export interface AfterbuyApiResponse<T> {
  readonly url: string;
  readonly request: RequestInit;
  readonly response: Response;
  readonly ok: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly data: T;
}
