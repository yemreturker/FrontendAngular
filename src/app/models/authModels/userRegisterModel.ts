import { UserLoginModel } from "./userLoginModel";

export interface UserRegisterModel extends UserLoginModel {
  firstName: string;
  lastName: string;
}