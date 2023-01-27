import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "@/styles/Signup.module.css";
import SignupForm from "./SignupForm";

const SignUp = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="flex flex-row h-screen relative max-md:hidden">
            <div className="basis-[62%] bg-bgSignup bg-no-repeat bg-center">
                <div className="relative top-[20%] left-[11%] ">
                    <span className="text-white text-3xl  font-normal font-itim">
                        {translations("homePage.signupForm.textAboveLogo")}
                    </span>
                    <Image
                        src="/images/inteloWord.png"
                        alt="Picture of the author"
                        width={300}
                        height={110}
                        className={styles.logoPadding}
                    />
                </div>
            </div>
            <SignupForm />
        </div>
    );
};

export default SignUp;
