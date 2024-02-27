import { Request, Response, Router } from 'express';
import Controller from '../controller/FavoritesController';
import TokenValidation from '../middlewares/TokenValidation';

const router = Router();
const controller = new Controller();

router.patch('/:id',
// TokenValidation.validateToken,
(req: Request, res: Response) => controller.favorite(req, res));

router.get('/:id',
// TokenValidation.validateToken,
(req: Request, res: Response) => controller.getAllFavorites(req, res));

router.get('/:id/meals',
// TokenValidation.validateToken,
(req: Request, res: Response) => controller.getAllMealsFavorites(req, res));

router.get('/:id/drinks',
// TokenValidation.validateToken,
(req: Request, res: Response) => controller.getAllDrinksFavorites(req, res));

router.delete('/:id',
// TokenValidation.validateToken,
(req: Request, res: Response) => controller.unfavorite(req, res));


export default router;
