import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const LoginFormMobile = () => {
    const handleOnChange = () => null;
    const { t: translations } = useTranslation();

    return (
        <div className="pt-10 flex flex-col h-screen bg-bgLogin bg-no-repeat bg-center md:hidden">
            <div className="">
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
            </div>
            <div className="">
                <div className="flex flex-col m-6 py-[10%] px-[5%] bg-white rounded-xl shadow-[0_10px_20px_1px_rgba(0,0,0,0.2)]">
                    <div className="self-center text-center">
                        <p className="font-normal text-4xl max-sm:text-2xl font-helvetica leading-[12%]">
                            {translations("homePage.loginForm.formMainHeading")}
                        </p>
                        <p className="text-greyText font-normal text-md leading-[142%] tracking-wider font-helvetica mx-[10%]">
                            {translations(
                                "homePage.loginForm.textUnderHeading"
                            )}
                        </p>
                    </div>
                    <div className="mt-7">
                        <form id="login" method="get" action="login.php">
                            <input
                                type="text"
                                name="Uname"
                                id="Uname"
                                placeholder="Username"
                                className="bg-lightGreyBg border-inputFieldBorder border-l-2 rounded-sm w-full px-4 py-4 my-2"
                            />
                            <input
                                type="Password"
                                name="Pass"
                                id="Pass"
                                placeholder="Password"
                                className="bg-lightGreyBg border-inputFieldBorder border-l-2 rounded-sm w-full px-4 py-4 my-2"
                            />
                        </form>
                        <div className="flex flex-row relative">
                            <input
                                type="checkbox"
                                id="check"
                                className="left-0"
                                checked
                                onChange={handleOnChange}
                            />
                            <span>
                                {translations("homePage.loginForm.rememberMe")}
                            </span>
                            <Link href="/" className="absolute right-0">
                                {translations(
                                    "homePage.loginForm.forgotPassword"
                                )}
                            </Link>
                        </div>
                    </div>
                    <div className="text-center max-sm:mt-5">
                        <button
                            type="button"
                            className="btn btn-primary mx-auto border-2 text-lg px-[7%] py-[2%] text-white bg-darkBlueBg"
                        >
                            {translations("homePage.loginForm.loginBtnText")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginFormMobile;
