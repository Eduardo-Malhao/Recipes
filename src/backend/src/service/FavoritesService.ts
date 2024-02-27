// import Model from '../model/FavoritesModel';
// import { IBodyFavorites } from '../interfaces/IBodyFavorites';
// import { IFavorites } from '../interfaces/IFavorites';
// import { IServiceFavorites } from '../interfaces/IServiceFavorites';
// import FavoriteChecker from '../utils/FavoriteChecker';

// export default class FavoritesService {
//   constructor(
//     private model: Model = new Model(),
//   ) { }

//   public async favorite(ids: IBodyFavorites)
//   : Promise<IServiceFavorites> {
//     try {
//       const getAllFavoritesIds: IFavorites[] = await this.model.getAllFavoritesIds(ids.user_id);
//       Promise.all(getAllFavoritesIds);
//       const isFavorite: boolean = FavoriteChecker.checkFavorite(getAllFavoritesIds, ids.meal_id, ids.drink_id);
      
//       if (isFavorite) {
//         await this.model.unfavorite(ids);
//         return { status: 'SUCCESS', data: 'Desfavoritado' };
//       }
//       if(ids.drink_id) {
//         const response = await this.model.favorite(ids);
//         return { status: 'SUCCESS', data: response };
//       }
//       if (ids.meal_id) {
//         const response = await this.model.favorite(ids);
//         return { status: 'SUCCESS', data: response };
//       }

//       return { status: 'NOT_FOUND', data: 'Meal or Drink Not Found' };

//     } catch (error) {
//       return { status: 'CONFLICT', data: 'Internal error' };
//     }
//   }


//   public async getAllFavorites(id: number)
//   : Promise<IServiceFavorites> {
//     try {
//       const response = await this.model.getAllFavorites(id);
//       if (response !== null) return { status: 'SUCCESS', data: response };

//       return { status: 'NOT_FOUND', data: `You don't have favorites` };
      
// 		} catch (error) {
//       return { status: 'CONFLICT', data: 'Internal error' };
//     }
//   }

//   public async getAllMealsFavorites(id: number)
//   : Promise<IServiceFavorites> {
//     try {
//       const response = await this.model.getAllMealsFavorites(id);
//       if (response !== null) return { status: 'SUCCESS', data: response };

//       return { status: 'NOT_FOUND', data: `You don't have Meals favorites` };
      
// 		} catch (error) {
//       return { status: 'CONFLICT', data: 'Internal error' };
//     }
// 	}

//   public async getAllDrinksFavorites(id: number)
//   : Promise<IServiceFavorites> {
//     try {
//       const response = await this.model.getAllDrinksFavorites(id);
//       if (response !== null) return { status: 'SUCCESS', data: response };

//       return { status: 'NOT_FOUND', data: `You don't have Drinks favorites` };

//     } catch (error) {
//       return { status: 'CONFLICT', data: 'Internal error' };
//     }
//   }


//   public async unfavorite(ids: IBodyFavorites)
// 	: Promise<IServiceFavorites> {
// 		try{
// 			const response = await this.model.unfavorite(ids);
// 			if (response !== null) return { status: 'SUCCESS', data: `Favorite deleted` };

// 			return { status: 'NOT_FOUND', data: `Favorite not found` };

// 		} catch (error) {
// 			return { status: 'CONFLICT', data: 'Internal error' };
// 		}
//   }
// }
