import { observer } from "mobx-react";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./SignUpForm.module.scss"
import { signUpValidation } from "../signUp/validation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import accountStore from "../../../../../store/AccountStore";
import TextInput from "../../../../ui/textInput/TextInput";
import modalStore from "../../../../../store/ModalStore";

type SignUpType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const emptySugnUpFormFields: SignUpType = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
}

const SignUpForm = () => {
    const [serverErrors, setServerErrors] = useState<string[]>([]);
    const validationScheme = signUpValidation();

    const methods = useForm<SignUpType>({
        mode: "onBlur",
        defaultValues: emptySugnUpFormFields,
        resolver: yupResolver(validationScheme)
    });

    const resetServerErrors = () => {
        setServerErrors([]);
        methods.clearErrors();
    };

    const onSubmit: SubmitHandler<SignUpType> = (data: SignUpType) => {
        accountStore.signUp(data.firstName, data.lastName);
        modalStore.toggleSignUpModal(false);
    };

    const toggleSignInModel = () => {
        modalStore.toggleSignUpModal(false);
        modalStore.toggleSignInModal(true);
    }

    return (
        <div className={styles.authModalWrapper}>
            <h2 className={styles.title}>
                Registration
            </h2>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className={styles.formWrapper}
                >
                    <TextInput
                        title="First Name"
                        fieldName="firstName"
                        fieldError={methods.formState.errors.firstName}
                        resetServerErrors={resetServerErrors}
                    />
                    <TextInput
                        title="Last Name"
                        fieldName="lastName"
                        fieldError={methods.formState.errors.lastName}
                        resetServerErrors={resetServerErrors}
                    />
                    <TextInput
                        title="mail"
                        fieldName="email"
                        fieldError={methods.formState.errors.email}
                        resetServerErrors={resetServerErrors}
                    />
                    <TextInput
                        title="Password"
                        type="password"
                        fieldName="password"
                        fieldError={methods.formState.errors.password}
                        resetServerErrors={resetServerErrors}
                    />
                    <div className={styles.buttonsWrapper}>
                        <button
                            className={styles.textButton}
                            type="button"
                            onClick={toggleSignInModel}
                        >
                            Login
                        </button>
                        <button
                            type="submit"
                            disabled={!methods.formState.isDirty || !methods.formState.isValid}
                        >
                            Registration
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default observer(SignUpForm);