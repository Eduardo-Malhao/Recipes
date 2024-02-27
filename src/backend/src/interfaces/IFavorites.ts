import { IDrinks } from "./IDrinks"
import { IMeals } from "./IMeals"

export interface IFavorites {
    id?: number,
    user_id?: number,
    meal_id?: number,
    drink_id?: number,
    meal?: IMeals | null,
    drink?: IDrinks | null
}