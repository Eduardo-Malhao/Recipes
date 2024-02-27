import { IMeals } from './IMeals';

export interface IServiceMeals {
   status: string,
   data: IMeals[] | string[] | string 
}