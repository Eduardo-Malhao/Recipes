import { Request, Response, Router } from 'express';
import Controller from '../controller/UsersController';
import LoginValidation from '../middlewares/LoginValidation';
import RegisterValidation from '../middlewares/RegisterValidation';

const router = Router();
const controller = new Controller();

router.post('/register',
RegisterValidation.validateFields,
RegisterValidation.validateEmail,
RegisterValidation.validateUsername,
RegisterValidation.validatePassword,
(req: Request, res: Response) => controller.register(req, res));

router.post('/login',
LoginValidation.validateFields,
(req: Request, res: Response) => controller.login(req, res));

router.get('/', (req: Request, res: Response) => controller.getAllUsers(req, res));

export default router;
