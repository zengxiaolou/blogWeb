export interface ApiResponse<T = any> {
  [props: string]: any;
  result?: T;
  Extra?: {
    [key: string]: any;
  };
  metadata: {
    code: string;
    message: string;
    page?: {
      size: number;
      index: number;
      total: number;
    };
  };
}
