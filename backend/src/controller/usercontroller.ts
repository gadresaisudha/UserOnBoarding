import User from '../model/users';
import { Request, Response } from 'express';

export interface CustomRequest extends Request {
    userId?: string;
}

export const updateUserDetails = async (req: CustomRequest, res: Response) => {
    const userId = req.userId;
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
      return res.json(updatedUser);
    } catch (err) {
      return res.status(500).json({ msg: 'Failed to update user', error: err });
    }
};