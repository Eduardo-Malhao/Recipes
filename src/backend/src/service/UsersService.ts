import Model from '../model/UsersModel';
import { IUsers } from '../interfaces/User/IUsers';
import { ILogin } from '../interfaces/User/ILogin';
import { IServiceLoginUsers } from '../interfaces/User/IServiceLoginUsers';
import { IServiceGetAllUsers } from '../interfaces/User/IServiceGetAllUsers';
import { IServiceCreateUsers } from '../interfaces/User/IServiceCreateUsers';
import { IServiceGetUsers } from '../interfaces/User/IServiceGetUsers';
import JwtUtils from '../utils/JWTutils';
import PasswordValidation from '../utils/PasswordValidation';
import UserDto from '../controller/UserDto';


export default class UsersService {
  constructor(
    private model: Model = new Model(),
  ) { }

  public async register(user: IUsers)
  : Promise<IServiceCreateUsers> {
    try {
      const checkUser = await this.getUsers(user);
        
      if (checkUser.status === 'SUCCESS') {
        return { status: 'CONFLICT', data: 'User already exists' };
      }
      
      const response = await this.model.createUser(user);
      const treatedResponse = UserDto.UserToBody(response);
        
      return { status: 'SUCCESS', data: treatedResponse };
        
    } catch (error) {
        return { status: 'CONFLICT', data: 'Internal error' };
    }
}

  public async login(user : ILogin)
  : Promise<IServiceLoginUsers> {
    try {
      const findUser = await this.model.findByEmail(user) || await this.model.findByName(user) as IUsers;
        
      if (findUser) {
        const passwordValidation = PasswordValidation.validatePassword(user, findUser);
        
        const tokenGenerated = JwtUtils.sign({ id: findUser.id });
        if (passwordValidation) return { status: 'SUCCESS', data: tokenGenerated }
      }

      return { status: 'NOT_FOUND', data: 'Invalid email or password' };

    } catch (error) {
      return { status: 'CONFLICT', data: 'Internal error' };
    }
  }

  public async getAllUsers()
  : Promise<IServiceGetAllUsers> {
    try {
    const response = await this.model.getAllUsers();
      
    return { status: 'SUCCESS', data: response };
      
    } catch (error) {
      return { status: 'CONFLICT', data: 'Internal error' };
    }
  }

  public async getUsers(user: IUsers)
  : Promise<IServiceGetUsers> {
    try {
      if(user.username !== null) {
      const response = await this.model.findByName(user);
      if (response) return { status: 'SUCCESS', data: response };
      }
      
      if (user.email !== null) {
        const response = await this.model.findByEmail(user);
        if (response) return { status: 'SUCCESS', data: response };
      }

      return { status: 'NOT_FOUND', data: 'Not Found' };
      
    } catch (error) {
      return { status: 'CONFLICT', data: 'Internal error' };
    }
  }
}
