import { Request, Response, NextFunction } from 'express';

export default class RegisterValidation {
  public static validateFields(req: Request, res: Response, next: NextFunction) {
    const fields = req.body;

    if (!fields.email || !fields.password || !fields.username) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
  
		next();
	}

  public static validateEmail(req: Request, res: Response, next: NextFunction) {
    const fields = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		const emailCheck: boolean = emailRegex.test(fields.email)
    if (emailCheck === false) {
			return res.status(400).json({ message: 'Invalid email' });
    }

    next();
  }
  
  public static validateUsername(req: Request, res: Response, next: NextFunction) {
    const fields = req.body;

    if (fields.username.length < 4 || fields.username.length > 20) {
      return res.status(400).json({ message: 'Invalid username' });
    }

    next();
  }

  public static validatePassword(req: Request, res: Response, next: NextFunction ) {
    const fields = req.body;
    const passwordRegex =	/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*0-9])(?=.{6,15}$).*/;

		const passwordCheck: boolean = passwordRegex.test(fields.password)
    if (passwordCheck === false) {
			return res.status(400).json({ message: 'Invalid password' });
    }

    next();
  }

}