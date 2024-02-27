import { IResponseUser } from "../interfaces/User/IResponseUser";
import { IUsers } from "../interfaces/User/IUsers";

export default class UserDto{
    
    public static BodyToUser(body: any) : IUsers {
        return {
            email: body.email,
            password: body.password,
            username: body.username,
            role: body.role
        };
    }

    public static UserToBody(user: IUsers) : IResponseUser {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
        };
    }
}