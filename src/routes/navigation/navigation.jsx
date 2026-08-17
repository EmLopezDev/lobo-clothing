import { Outlet, Link } from "react-router-dom";
import WolfIcon from "../../assets/wolf-howl.svg?react";
import "./navigation.scss";

const Navigation = () => {
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
