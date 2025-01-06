import * as yup from "yup";
import { RegExpressions } from "../../../../constants/Regex";

export function signUpValidation() {
    return yup
        .object({
            firstName: yup.string().trim().required().min(2, "Filed should be more than 2 characters")
                .max(256, "The field must be no more than 256 characters"),
            lastName: yup.string().trim().required().min(2, "Filed should be more than 2 characters")
                .max(256, "The field must be no more than 256 characters"),
            email: yup.string().trim().required()
                .matches(RegExpressions.emailWithSpaces)
                .max(256, "The field must be no more than 256 characters"),
            password: yup.string().trim().required().min(8, "Filed should be more than 8 characters")
                .max(256, "The field must be no more than 256 characters"),
        });
}