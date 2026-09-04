import { type ReactNode, type MouseEventHandler } from "react";
import Loader from "../loader/loader";
import "./button.scss";

enum BUTTON_TYPES_CLASSES {
    base = "base",
    google = "google-sign-in",
    inverted = "inverted",
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    buttonType?: "base" | "google" | "inverted";
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
    children,
    buttonType = "base",
    disabled,
    isLoading,
    onClick,
    ...otherProps
}: ButtonProps) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            onClick={onClick}
            disabled={isLoading || disabled}
            {...otherProps}
        >
            {isLoading ? <Loader loaderSize="small" /> : children}
        </button>
    );
};

export default Button;
