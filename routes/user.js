import express from 'express'; 
import { signUpUser, logInUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signUpUser);
router.post('/login', logInUser);
// router.get('/logout', user_controller.logOutUser);
// router.get('/:id/delete', user_controller.deleteUser);
// router.get('/:id/update', user_controller.updateUser);

export default router;
