import "./form-input.scss";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
    const { value } = otherProps;
    const hasValue = (value: unknown): boolean => {
        return Array.isArray(value)
            ? value.length > 0
            : value != null && String(value).trim().length > 0;
    };

    return (
        <div className="group">
            <input
                className="form-input"
                {...otherProps}
            />
            {label && (
                <label
                    htmlFor=""
                    className={`${hasValue(value) ? "shrink" : ""} form-input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;
