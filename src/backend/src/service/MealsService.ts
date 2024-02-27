// import Model from '../model/MealsModel';
// import { IServiceMeals } from '../interfaces/IServiceMeals';
// import { ISearch } from '../interfaces/ISearch';

// export default class MealsService {
//   constructor(
//     private model: Model = new Model(),
//   ) { }

//   public async getMeals(search: ISearch)
//   : Promise<IServiceMeals> {
//     try {
//       if(search.name) {
//         const response = await this.model.findByName(search.name);
//         if (response) return { status: 'SUCCESS', data: response };
//         return { status: 'NOT_FOUND', data: 'Not Found' };
//     }
//     if (search.first) {
//         const response = await this.model.findByLetter(search.first);
//         if (response) return { status: 'SUCCESS', data: response };
//         return { status: 'NOT_FOUND', data: 'Not Found' };
//     }
//     if (search.ingredient) {
//         const response = await this.model.findByIngredient(search.ingredient);
//         if (response) return { status: 'SUCCESS', data: response };
//         return { status: 'NOT_FOUND', data: 'Not Found' };
//     }
//     const response = await this.model.findAll();
//     return { status: 'SUCCESS', data: response };
//     } catch (error) {
//         return { status: 'CONFLICT', data: 'Internal error' };
//     }
//   }
// }
