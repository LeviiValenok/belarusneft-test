import { useState } from "react";
import { signInValidation } from "./validation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../signUp/SignUpForm.module.scss";
import TextInput from "../../../../ui/textInput/TextInput";
import { observer } from "mobx-react";
import modalStore from "../../../../../store/ModalStore";
import accountStore from "../../../../../store/AccountStore";

type SignInType = {
    login: string;
    password: string;
}

const emptySignInForm: SignInType = {
    login: "",
    password: "",
}

const SignInForm = () => {
    const [serverErrors, setServerErrors] = useState<string[]>([]);
    const validationScheme = signInValidation();

    const methods = useForm<SignInType>({
        mode: "onBlur",
        defaultValues: emptySignInForm,
        resolver: yupResolver(validationScheme)
    });

    const resetServerErrors = () => {
        setServerErrors([]);
        methods.clearErrors();
    };

    const onSubmit: SubmitHandler<SignInType> = (data: SignInType) => {
        accountStore.signIn();
        modalStore.toggleSignInModal(false);
        console.log("sign in form data: ", data);
    };

    const toggleSignUpModel = () => {
        modalStore.toggleSignInModal(false);
        modalStore.toggleSignUpModal(true);
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
                        title="Login"
                        fieldName="login"
                        fieldError={methods.formState.errors.login}
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
                            onClick={toggleSignUpModel}
                        >
                            Registration
                        </button>
                        <button
                            type="submit"
                            disabled={!methods.formState.isDirty || !methods.formState.isValid}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default observer(SignInForm);
