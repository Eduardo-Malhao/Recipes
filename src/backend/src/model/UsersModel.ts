// import Model from '../database/models/User';
import { IUsers } from '../interfaces/User/IUsers';
import { ILogin } from '../interfaces/User/ILogin';
import supabase from '../../../utils/supabase';

export default class UsersModel {
  // private model = Model;

    public async createUser(user: IUsers)
    : Promise<any> {
      const response = await supabase
      .from('users')
        .insert([{
          email: user.email,
          username: user.username,
          password: user.password,
          role: user.role
        }])
            
      return response;
    }

    // public async createUser(user: IUsers)
    // : Promise<IUsers> {
    //   const response = await this.model.create({
    //     email: user.email,
    //     password: user.password,
    //     username: user.username,
    //     role: user.role,
    //   });
            
    //   return response;
    // }

//     public async findByName(user: IUsers | ILogin)
//     : Promise<IUsers | null> {
//       const response = await this.model.findOne({	where: { username: user.username } });

//       return response;
//     }
    
//     public async findByEmail(user: IUsers | ILogin)
//     : Promise<IUsers | null> {
//       const response = await this.model.findOne({ where: { email: user.email } });
  
// 			return response;
//     }

//     public async getAllUsers()
//     : Promise<IUsers[]> {
//       const response = await this.model.findAll();
      
//       return response;
//     }
}
