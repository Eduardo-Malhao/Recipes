import { Request, Response, Router } from 'express';
import Controller from '../controller/DrinksController';

const controller = new Controller();

const router = Router();

router.get('/', (req: Request, res: Response) => controller.getDrinks(req, res));

export default router;
