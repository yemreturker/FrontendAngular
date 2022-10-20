import { ResponseModelBase } from "./responseModelBase";

export interface AuthResponseModel extends ResponseModelBase {
  data: {
    token: string;
    expiration: string;
  };
}