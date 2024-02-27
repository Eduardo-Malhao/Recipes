// import Model from '../database/models/Favorites';
// import { IBodyFavorites } from '../interfaces/IBodyFavorites';
// import { IFavorites } from '../interfaces/IFavorites';
// import FreeAPIMealsSequelize from '../database/models/FreeAPIMealsSequelize';
// import FreeAPIDrinksSequelize from '../database/models/FreeAPIDrinksSequelize';

// export default class UsersModel {
// 	private model = Model;
	
// 	public async favorite(ids: IBodyFavorites)
// 	: Promise<IFavorites> {
		
// 		const response = await this.model.create({
// 			user_id: ids.user_id,
// 			meal_id: ids?.meal_id,
// 			drink_id: ids?.drink_id,
// 		});

// 		return response;
// 	}
		
// 	public async getAllFavorites(id: number)
// 	: Promise<IFavorites[]> {
// 		const response = await this.model.findAll({
// 			where: { user_id: id }, attributes: { exclude: ['id', 'user_id', 'meal_id', 'drink_id'] },
// 			include: [ 
// 				{ model: FreeAPIMealsSequelize, as: 'meal' },
// 				{ model: FreeAPIDrinksSequelize, as: 'drink' } 
// 			]
// 		})

// 		return response;
// 	}

// 	public async getAllMealsFavorites(id: number)
// 	: Promise<IFavorites[]> {
// 		const response = await this.model.findAll({
// 			where: { user_id: id }, attributes: { exclude: ['id', 'user_id', 'meal_id', 'drink_id'] },
// 			include: [ { model: FreeAPIMealsSequelize, as: 'meal' } ]
// 		})

// 		return response;
// 	}


// 	public async getAllDrinksFavorites(id: number)
// 	: Promise<IFavorites[]> {
// 		const response = await this.model.findAll({
// 			where: { user_id: id }, attributes: { exclude: ['id', 'user_id', 'meal_id', 'drink_id'] },
// 			include: [ { model: FreeAPIDrinksSequelize, as: 'drink' } ]
// 		})

// 		return response;
// 	}
	
// 	public async unfavorite(ids: IBodyFavorites)
// 	: Promise<number> {
// 		const whereConditions: any = { user_id: ids.user_id };

//   if (ids.meal_id !== undefined) {
//     whereConditions.meal_id = ids.meal_id;
//   } else if (ids.drink_id !== undefined) {
//     whereConditions.drink_id = ids.drink_id;
//   }

//   const response = await this.model.destroy({
//     where: whereConditions,
//   });
		
// 		return response;
// 	}

// 	public async getAllFavoritesIds(id: number)
// 	: Promise<IFavorites[]> {
// 		const response = await this.model.findAll({ where: { user_id: id } });

// 		return response;
// 	}
// }
