import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


interface CustomRequest extends Request {
  userId?: string;
}

export const protect = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  console.log(req.headers.authorization);
  if (!token) return res.status(403).json({ msg: 'Access Denied: No Token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { id: string };
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ msg: 'Invalid Token' });
  }
};

