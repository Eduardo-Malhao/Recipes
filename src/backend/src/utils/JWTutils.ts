import * as jwt from 'jsonwebtoken';
import { IToken } from '../interfaces/IToken';

export default class JwtUtils {
  static jwtSecret = process.env.JWT_SECRET || 'secret';

  static sign(payload: IToken): string {
    return jwt.sign(payload, JwtUtils.jwtSecret);
  }

  static verify(token: string): IToken | undefined {
    try {
      const data = jwt.verify(token, JwtUtils.jwtSecret) as IToken;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
