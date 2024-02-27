import { IUsers } from "./IUsers";

export interface IServiceGetUsers {
  status: string;
  data: IUsers | string;
}