import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user-context/user-context";
import WolfIcon from "../../assets/wolf-howl.svg?react";
import "./navigation.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    return (
        <>
            <nav className="nav-container">
                <Link
                    className="logo-container"
                    to="/"
                >
                    <WolfIcon className="logo" />
                </Link>
                <ul className="nav-links-container">
                    <li className="nav-link">
                        <Link to="/shop">SHOP</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/auth">SIGN IN</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;
