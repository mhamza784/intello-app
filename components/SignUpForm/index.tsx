import SignupFormDesktop from "./DesktopView";
import SignupFormMobile from "./MobileView";

const SignUpForm = () => {
    return (
        <>
            <SignupFormMobile />
            <SignupFormDesktop />
        </>
    );
};

export default SignUpForm;
