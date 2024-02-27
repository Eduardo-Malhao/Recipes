import { Request, Response } from 'express';
import Service from '../service/MealsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import { ISearch } from '../interfaces/ISearch';

export default class MealsController {
    private service: Service;
    constructor() { this.service = new Service() }

    public async getMeals(req: Request, res: Response) {
        const search: ISearch = req.query;
        const { status, data } = await this.service.getMeals(search);

        return res.status(mapStatusHTTP(status)).json(data);
    }
}

