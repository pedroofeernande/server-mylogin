import {Router} from "express";


import auth from "./middlewares/auth";

import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";
import SessionController from "./controllers/SessionController";


const routes = new Router();

routes.post('/sessions', SessionController.create);
routes.get('/hello', HelloController.index);

//middleware
routes.use(auth);


//rest
//rotas privadas
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);


export default routes;

