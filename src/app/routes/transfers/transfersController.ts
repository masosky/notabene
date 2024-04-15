import { Router, Request, Response } from "express";
import { body, validationResult } from 'express-validator';
import { TranferRequest, TransferResponse } from "../../models/Transfer";
import { GenericValidatorErrorResponse } from "../../models/generic";
import logger from "../../../logger/logger";

const router = Router();

const transferValidator = [
    body("from", 'From field is mandatory').isString().notEmpty(),
    body("to", 'To field is mandatory').isString().notEmpty(),
    body("asset", 'Asset field is mandatory').isString().notEmpty(),
    body("amount", 'Amount field is mandatory').isString().notEmpty()
]

router.post('/transfers',
    transferValidator,
    (req: Request<TranferRequest>, res: Response<TransferResponse | GenericValidatorErrorResponse>) => {
        const errors = validationResult(req);
        const xApiKey = req.header('x-api-key');
        logger.info('Creating transfer', { request: req.body, ["x-api-key"]: xApiKey })
        if (errors.isEmpty()) {
            // TODO validate x-api-key
            // 1. if x-api-key is correct we proceed
            // 2. If it is not correct we discard request
            // 3. What happens if request server fails?
            const response: TransferResponse = {
                id: "",
                from: "",
                to: "",
                asset: "",
                amount: "",
                amount_in_usd: "",
                created_at: ""
            }
            res.send(response);
        } else {
            const response: GenericValidatorErrorResponse = {
                errors: errors.array()
            }
            res
                .status(422)
                .json(response)
        }

    });

export default router;