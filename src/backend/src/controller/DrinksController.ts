import { Request, Response } from 'express';
import Service from '../service/DrinksService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import { ISearch } from '../interfaces/ISearch';

export default class DrinksController {
    private service: Service;
    constructor() { this.service = new Service() }

    public async getDrinks(req: Request, res: Response) {
        const search: ISearch = req.query;
        const { status, data } = await this.service.getDrinks(search);

        return res.status(mapStatusHTTP(status)).json(data);
    }
}

