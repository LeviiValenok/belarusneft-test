import { ChangeEvent, InputHTMLAttributes } from "react";
import { FieldError, FieldValues, Path, useFormContext } from "react-hook-form";
import styles from "./TextInput.module.scss";

export interface InputProps {
    fieldName: Path<FieldValues>;
    resetServerErrors?: () => void;
    fieldError?: FieldError;
}

interface TextInputProps extends InputProps, InputHTMLAttributes<HTMLInputElement> {}

const TextInput = ({
   title,
   placeholder,
   fieldError,
   fieldName,
   resetServerErrors,
   type,
}: TextInputProps) => {
    const {register, clearErrors} = useFormContext<FieldValues>();

    const {onChange, ...otherProps} = register(fieldName);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        clearErrors(fieldName);
        resetServerErrors?.();
    };

    return (
        <div
            className={`${styles.inputWrapper} ${fieldError?.message ? styles.error : ""}`}        >
            <h4>
                {title}
            </h4>
            <input
                type={type || "text"}
                placeholder={placeholder}
                {...otherProps}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextInput;
