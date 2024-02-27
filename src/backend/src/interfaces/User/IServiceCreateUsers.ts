import { IResponseUser } from "./IResponseUser";

export interface IServiceCreateUsers {
  status: string;
  data: IResponseUser | string;
}