import express from 'express'; 
import { greetingsEmail } from '../controllers/emailController.cjs';

const router = express.Router();

router.post('/welcome', (req, res, next) => {
	if(Object.keys(req.body).length > 0) {
		return greetingsEmail(req.body)
			.then(response => {
				console.log('response => ', response.body)
				res.redirect('/');
			})
			.catch(err => next(err))
	}

	return res.redirect('/')
});

export default router;
