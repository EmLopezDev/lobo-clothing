import { useState } from "react";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./sign-in-form.scss";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        if (!email && !password.length) return;
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                alert("Invalid credentials");
            } else {
                console.error("User sign in encountered an error", error.message);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmitForm}>
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
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button
                        buttonType="google"
                        type="button"
                        onClick={signInWithGoogle}
                    >
                        Google sign in
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
