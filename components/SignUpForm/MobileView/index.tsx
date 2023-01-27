import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Form from "./Form";

const LoginFormMobile = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="pt-10 flex flex-col h-screen bg-bgLogin bg-no-repeat bg-center md:hidden">
            <div className="flex flex-col justify-center items-center">
                <span className="text-white text-3xl font-normal font-itim">
                    {translations("homePage.loginForm.textAboveLogo")}
                </span>
                <Image
                    src="/intello.png"
                    height="120"
                    width="200"
                    alt="heading"
                />
            </div>
            <div className="flex flex-col m-6 py-[6%] px-[5%] bg-white rounded-xl shadow-[0_10px_20px_1px_rgba(0,0,0,0.2)]">
                <div className="self-center text-center">
                    <p className="font-normal text-4xl max-sm:text-2xl font-helvetica leading-[8%]">
                        {translations("homePage.signupForm.formMainHeading")}
                    </p>
                    <p className="text-greyText font-normal text-md leading-[142%] tracking-wider font-helvetica mx-[10%]">
                        {translations("homePage.signupForm.textUnderHeading")}
                    </p>
                </div>
                <div className="mt-0">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default LoginFormMobile;
