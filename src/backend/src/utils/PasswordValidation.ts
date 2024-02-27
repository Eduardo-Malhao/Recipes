import * as bcrypt from 'bcryptjs';
import { ILogin } from '../interfaces/User/ILogin';

export default class PasswordValidation {

    public static validatePassword(bodyPassword: ILogin, dbPassword: any) {
        return bcrypt.compareSync(bodyPassword.password, dbPassword.dataValues.password);
    }
}