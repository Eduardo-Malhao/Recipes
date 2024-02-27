import { IDrinks } from './IDrinks';

export interface IServiceDrinks {
   status: string,
   data: IDrinks[] | string[] | string 
}