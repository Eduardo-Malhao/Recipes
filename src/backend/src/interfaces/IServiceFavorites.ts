import { IFavorites } from './IFavorites';

export interface IServiceFavorites {
  status: string;
  data: string | IFavorites | IFavorites[];
}