import express from 'express';
import { login } from '../controller/authcontroller';


const router = express.Router();
console.log('hello');
router.post("/auth",login);


export default router;