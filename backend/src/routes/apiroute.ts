import express from 'express';
import { login} from '../controller/authcontroller';
import { updateUserDetails ,getAllUserDetails,getUserDetails} from '../controller/usercontroller';
import { protect } from '../middleware/authMiddleware';
import { getAdminConfig,updateAdminConfig } from '../controller/adminconfigcontroller';
const router = express.Router();

router.post('/auth',login);
router.get('/auth/user',protect,getUserDetails);
router.put('/auth/user', protect, updateUserDetails);
router.get('/data',getAllUserDetails);
router.get('/admin-config', getAdminConfig);
router.post('/admin-config', updateAdminConfig);

export default router;