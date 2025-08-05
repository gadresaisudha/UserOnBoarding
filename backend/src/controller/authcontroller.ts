
import User from '../model/users';
import { Request,Response } from 'express';
import { hashPassword,comparePassword } from '../utils/hashutil';
import jwt from 'jsonwebtoken';


export const login = async(req:Request, res:Response)=>{
    console.log('hello');
    const {email,password} = req.body;
    if(!email|| !password){ return res.status(400).json({msg :'Missing Credentials'})};

    let user = await User.findOne({email}).select('+password');

    if (user) {
        const valid = await comparePassword(password, user.password);
        if (!valid) return res.status(401).json({ msg: 'Invalid credentials' });
      } else {
        const hashed = await hashPassword(password);
        user = await User.create({ email, password: hashed });
      }
    
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
      return res.json({ token, user });

}

