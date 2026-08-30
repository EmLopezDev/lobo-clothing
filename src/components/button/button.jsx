import Loader from "../loader/loader";
import "./button.scss";

const BUTTON_TYPES_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
};

const Button = ({ children, buttonType, disabled, isLoading, onClick, ...otherProps }) => {
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
