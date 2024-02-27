import { IUsers } from "./IUsers";

export interface IServiceGetAllUsers {
  status: string;
  data: IUsers[] | string;
}