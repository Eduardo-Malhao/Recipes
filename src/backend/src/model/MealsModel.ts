// import { Op } from 'sequelize';
// import Model from '../database/models/FreeAPIMealsSequelize';
// import { IMeals } from '../interfaces/IMeals';

// export default class MealsModel {
//   private model = Model;

//     async findAll()
//         : Promise<IMeals[]> {        
//             const response = await this.model.findAll();
            
//             return response;
//         }

//         async findByName(search: string)
//         : Promise<IMeals[] | null> {
//             const response = await this.model.findAll({
//                 where: { meal_name: { [Op.like]: `%${search}%` } } 
//             });
//             if (!response) return null;
//             return response;
//         }
    
//         async findByLetter(search: string)
//         : Promise<IMeals[] | null> {
//             const response = await this.model.findAll({
//                 where: { meal_name: { [Op.like]: `${search}%` } } 
//             });
//             if (!response) return null;
//             return response;
//         }

//         async findByIngredient(search: string)
//         : Promise<IMeals[] | null> {
//             const response = await this.model.findAll({
//                 where: { 
//                     [Op.or]: [
//                         { meal_ingredient_01: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_02: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_03: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_04: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_05: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_06: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_07: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_08: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_09: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_10: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_11: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_12: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_13: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_14: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_15: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_16: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_17: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_18: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_19: { [Op.like]: `%${search}%` } },
//                         { meal_ingredient_20: { [Op.like]: `%${search}%` } },
//                     ],
//                 } 
//             });
//             if (!response) return null;
//             return response;
//         }
// }
