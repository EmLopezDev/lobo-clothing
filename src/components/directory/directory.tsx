import DirectoryItem from "../directory-item/directory-item";
import { type DirectoryCategory } from "../../routes/home/home";
import "./directory.scss";

type DirectoryProps = {
    categories: DirectoryCategory[];
};

const Directory = ({ categories }: DirectoryProps) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
};

export default Directory;
