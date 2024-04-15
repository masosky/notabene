import { Router } from 'express';
import transfersController from "./transfers/transfersController"
import customerController from "./customer/customerController"

const routes = Router()
    .use(transfersController)
    .use(customerController)

export default routes;