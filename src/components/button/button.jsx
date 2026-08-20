import "./button.scss";

const BUTTON_TYPES_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
};

const Button = ({ children, buttonType, onClick, ...otherProps }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
