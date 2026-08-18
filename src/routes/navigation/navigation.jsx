import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user-context/user-context";
import { signOutUser } from "../../utils/firebase/firebase";
import WolfIcon from "../../assets/wolf-howl.svg?react";
import "./navigation.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

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
                    {currentUser ? (
                        <li
                            className="nav-link"
                            onClick={signOutUser}
                        >
                            SIGN OUT
                        </li>
                    ) : (
                        <li className="nav-link">
                            <Link to="/auth">SIGN IN</Link>
                        </li>
                    )}
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;
