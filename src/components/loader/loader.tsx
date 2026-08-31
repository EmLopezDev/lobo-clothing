import "./loader.scss";

type LoaderProps = {
    loaderSize: "small" | "medium";
};

const Loader = ({ loaderSize = "medium" }: LoaderProps) => {
    return (
        <div className="loader-overlay">
            <div className={`loader-container ${loaderSize}`}></div>
        </div>
    );
};

export default Loader;
