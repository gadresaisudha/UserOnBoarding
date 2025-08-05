import express from 'express';
import { login} from '../controller/authcontroller';
import { updateUserDetails ,getAllUserDetails} from '../controller/usercontroller';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/auth',login);
router.put('/auth/user', protect, updateUserDetails);
router.get('/data',getAllUserDetails);

export default router;