import { IFavorites } from "../interfaces/IFavorites";

export default class FavoriteChecker {

  public static checkFavorite(db: IFavorites[], meal_id: number | null, drink_id: number | null): boolean {
      return db.some(item => item.meal_id === meal_id || item.drink_id === drink_id);
  }

}