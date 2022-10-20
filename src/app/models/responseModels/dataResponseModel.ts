import { ResponseModelBase } from "./responseModelBase";

export interface DataResponseModel<T> extends ResponseModelBase {
    data: T;
}