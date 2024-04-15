import { ValidationError } from "express-validator";

export interface GenericValidatorErrorResponse {
    errors: ValidationError[];
}