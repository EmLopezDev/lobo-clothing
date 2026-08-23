import { useNavigate } from "react-router-dom";
import "./directory-item.scss";

const DirectoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`shop/${title.toLowerCase()}`);
    };

    return (
        <button
            className="directory-item-container"
            onClick={navigateHandler}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="directory-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </button>
    );
};

export default DirectoryItem;
