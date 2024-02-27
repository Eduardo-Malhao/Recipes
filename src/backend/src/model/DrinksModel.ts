// import { Op } from 'sequelize';
// import Model from '../database/models/FreeAPIDrinksSequelize';
// import { IDrinks } from '../interfaces/IDrinks';

// export default class DrinksModel {
//   private model = Model;

//     async findAll()
//         : Promise<IDrinks[]> {
//             const response = await this.model.findAll();
//             return response;
//         }

//     async findByName(search: string)
//         : Promise<IDrinks[] | null> {
//             const response = await this.model.findAll({
//                 where: { drink_name: { [Op.like]: `%${search}%` } } 
//             });
//             if (!response) return null;
//             return response;
//         }
    
//         async findByLetter(search: string)
//         : Promise<IDrinks[] | null> {
//             const response = await this.model.findAll({
//                 where: { drink_name: { [Op.like]: `${search}%` } } 
//             });
//             if (!response) return null;
//             return response;
//         }

//         async findByIngredient(search: string)
//         : Promise<IDrinks[] | null> {
//             const response = await this.model.findAll({
//                 where: { 
//                     [Op.or]: [
//                         { drink_ingredient_01: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_02: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_03: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_04: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_05: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_06: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_07: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_08: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_09: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_10: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_11: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_12: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_13: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_14: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_15: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_16: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_17: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_18: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_19: { [Op.like]: `%${search}%` } },
//                         { drink_ingredient_20: { [Op.like]: `%${search}%` } },
//                     ],
//                 } 
//             });
//             if (!response) return null;
//             return response;
//         }
// }
