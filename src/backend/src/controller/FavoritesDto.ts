import { IBodyFavorites } from "../interfaces/IBodyFavorites";

export default class FavoritesDto{
    
    public static BodyToFavorites(body: any, id: number) : IBodyFavorites {
        return {
            user_id: id,
            meal_id: body?.mealId,
            drink_id: body?.drinkId
        };
    }
}