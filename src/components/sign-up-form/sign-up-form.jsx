import { useState, useContext } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { UserContext } from "../../context/user-context/user-context";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./sign-up-form.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const validPassword =
            password.toLowerCase().trim() === confirmPassword.toLowerCase().trim();
        if (!displayName && !email && !password.length && !validPassword) return;
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            } else {
                console.error("User creation encountered an error", error.message);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmitForm}>
                <FormInput
                    label="Display Name"
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                    required
                />
                <FormInput
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    required
                />
                <FormInput
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                    required
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
