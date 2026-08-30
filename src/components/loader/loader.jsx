import "./loader.scss";

const Loader = ({ loaderSize = "medium" }) => {
    return (
        <div className="loader-overlay">
            <div className={`loader-container ${loaderSize}`}></div>
        </div>
    );
};

export default Loader;
