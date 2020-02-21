export class ResponseStatus {
  code: string;
  description: string;
};

export interface Response<T> {
  status: ResponseStatus;
  data: T;
};
