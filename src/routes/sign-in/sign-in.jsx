import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
