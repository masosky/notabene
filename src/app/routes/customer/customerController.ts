import { Router, Request, Response } from "express";
import { body } from 'express-validator';
import { TranferRequest } from "../../models/Transfer";
import logger from "../../../logger/logger";
import { TrackUsage, UsagePathParams } from "../../models/Customer";

const router = Router();

const customerValidator = [
    body("from", 'From field is mandatory').isString().notEmpty(),
    body("to", 'To field is mandatory').isString().notEmpty(),
    body("asset", 'Asset field is mandatory').isString().notEmpty(),
    body("amount", 'Amount field is mandatory').isString().notEmpty()
]

router.get('/customer/:customerId/usage',
    (req: Request, res: Response<TrackUsage>) => {
        const customerId = req.params.customerId;
        logger.info('Getting customer usage', { request: req.body, customerId })

        res.send({ usage: "0" })
    });

router.post('/customer/:customerId/usage',
    (req: Request<UsagePathParams, any, TrackUsage>, res: Response) => {
        const customerId = req.params.customerId;
        const { usage } = req.body;
        logger.info('Sending customer usage', { request: req.body, customerId })

        res
            .status(200)
            .send({})
    });

export default router;