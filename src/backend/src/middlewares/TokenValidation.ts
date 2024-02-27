import { Request, Response, NextFunction } from 'express';
import JwtUtils from '../utils/JWTutils';
import { IUsers } from '../interfaces/User/IUsers';

export default class TokenValidation {
  public static validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    try {
      const decoded = JwtUtils.verify(token) as IUsers;
      res.locals.user = { id: decoded.id };
      next();
    } catch (e) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
