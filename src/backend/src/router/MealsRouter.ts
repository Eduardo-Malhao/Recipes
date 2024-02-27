import { Request, Response, Router } from 'express';
import Controller from '../controller/MealsController';

const controller = new Controller();

const router = Router();

router.get('/', (req: Request, res: Response) => controller.getMeals(req, res));

export default router;
