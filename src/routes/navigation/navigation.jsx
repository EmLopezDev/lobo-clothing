import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
import { signOutUser } from "../../utils/firebase/firebase";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import CartIcon from "../../components/cart-icon/cart-icon";
import WolfIcon from "../../assets/wolf-howl.svg?react";
import "./navigation.scss";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

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
                    <li>
                        <CartIcon />
                    </li>
                </ul>
                {isCartOpen && <CartDropdown />}
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;
