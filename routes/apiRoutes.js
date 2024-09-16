import express from 'express';
import userregister from '../controllers/register.controller.js';
import logiregister from '../controllers/login.controller.js';
import getallusers from '../controllers/user.controller.js';
import { authenticateJWT } from '../services/jwt/token.js';


const apiRouter=express.Router()
apiRouter.post('/user/userregister', userregister)
apiRouter.post('/login/loginuser', logiregister)
apiRouter.get('/getallusers',authenticateJWT(['user']), getallusers)

export default apiRouter;


