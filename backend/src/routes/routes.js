import { Router } from 'express'
import UserController from '../controllers/UserController'

const routes = Router()

routes.get('/register', UserController.index)
routes.post('/register', UserController.store)
routes.post('/auth', UserController.authenticate)
routes.post('/forgot_password', UserController.forgotPassword)
routes.post('/reset_password', UserController.resetPassword)

export default routes
