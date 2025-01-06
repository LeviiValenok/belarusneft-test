import * as yup from "yup";

export function signInValidation() {
    return yup
        .object({
            login: yup.string().trim().required(),
            password: yup.string().trim().required(),
        });
}