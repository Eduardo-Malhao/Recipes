import { Request, Response } from 'express';
import Service from '../service/UsersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import UserDto from './UserDto';

export default class UsersControllers {
    private service: Service;

    constructor() { this.service = new Service() }

    public async register(req: Request, res: Response) {
        console.log('aqui');
        
        const body = UserDto.BodyToUser(req.body);
        
        const adminEmailRegex = /@admin\.com$/i;
        body.role = adminEmailRegex.test(body.email) ? 'ADMIN' : 'USER';
        
        const { status, data } = await this.service.register(body);

        return res.status(mapStatusHTTP(status)).json(data);
    }

    public async login(req: Request, res: Response) {
        const user = (req.body);
        const { status, data } = await this.service.login(user);

        return res.status(mapStatusHTTP(status)).json(data);
    }

    public async getAllUsers(req: Request, res: Response) {
        const { status, data } = await this.service.getAllUsers();

        return res.status(mapStatusHTTP(status)).json(data);
    }
}

