import { type ReactNode, type MouseEventHandler } from "react";
import Loader from "../loader/loader";
import "./button.scss";

const BUTTON_TYPES_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
};

type ButtonProps = {
    children: ReactNode;
    buttonType?: "google" | "inverted";
    disabled?: boolean;
    isLoading?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
    children,
    buttonType,
    disabled,
    isLoading,
    onClick,
    ...otherProps
}: ButtonProps) => {
    return (
        <button
            className={`button-container ${buttonType && BUTTON_TYPES_CLASSES[buttonType]}`}
            onClick={(e) => onClick(e)}
            disabled={isLoading || disabled}
            {...otherProps}
        >
            {isLoading ? <Loader loaderSize="small" /> : children}
        </button>
    );
};

export default Button;
