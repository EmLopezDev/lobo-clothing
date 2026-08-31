import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/user-reducer";
import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import CheckOut from "./routes/check-out/check-out";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user: any) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))(user);

            dispatch(setCurrentUser(pickedUser));
        });
        return unsubscribe;
    }, [dispatch]);

    return (
        <Routes>
            <Route
                path="/"
                element={<Navigation />}
            >
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="shop/*"
                    element={<Shop />}
                />
                <Route
                    path="auth"
                    element={<Authentication />}
                />
                <Route
                    path="check-out"
                    element={<CheckOut />}
                />
            </Route>
        </Routes>
    );
};

export default App;
