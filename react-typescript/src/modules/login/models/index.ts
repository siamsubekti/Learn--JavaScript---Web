import { Response, ResponseStatus } from "../../shared/models/ResponseModel";
import { ServiceType, AccountStatus } from "../../shared/models/Constants";

export class LoginFormDTO {
  username: string;
  password: string;
};

export class Service {
  id: number;
  code: string;
  name: string;
  endpointUrl: string;
  method: string;
  serviceType: ServiceType;
};

export class LoginResponseData {
  accountId: string;
  accountStatus: AccountStatus;
  sessionId: string;
  redirectTo: Service;
};

export class LoginResponse implements Response<LoginResponseData> {
  status: ResponseStatus;
  data: LoginResponseData;
};
