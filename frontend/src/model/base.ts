export interface IBaseResponse<T> {
    status: "success" | "error";
    statusCode: number;
    message: string;
    data: T | null;
    token?: string | null;
    totalPages?: number;
    totalCount?: number;
  }