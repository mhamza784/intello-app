import { useState, useCallback } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";
import * as userSlice from "src/redux/slices/users";
import CompanyOption from "./CompanyOption";
import CountryOptions from "./CountryOptions";

const Form = () => {
    const { t: translations } = useTranslation();

    const dispatch = useDispatch();

    const [company, setCompany] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        companySize: "",
        country: "",
        language: "",
        password: "",
    });

    const changeData = useCallback(
        (val: any, attribute: any) => {
            setCompany({ ...company, [attribute]: val });
        },
        [company]
    );

    const handleSubmit = () => {
        dispatch(userSlice.actions.createUserAction(company));
    };

    return (
        <form className="rounded" method="get">
            <div className="mb-5 grid grid-cols-2 gap-2 ">
                <input
                    id="firstName"
                    type="text"
                    value={company.firstName}
                    onChange={e => changeData(e.target.value, "firstName")}
                    className="w-full py-2 px-5  border-[#1A1A1A] border-l-2 rounded-sm   text-signupInputText bg-signupInputBg"
                    placeholder={`${translations(
                        "homePage.signupForm.formInputs.firstName"
                    )}`}
                />
                <input
                    className="shadow appearance-none rounded-sm w-full py-2 px-5 border-[#1A1A1A] border-l-2  text-signupInputText bg-signupInputBg  "
                    id="lastName"
                    value={company.lastName}
                    onChange={e => changeData(e.target.value, "lastName")}
                    type="text"
                    placeholder={`${translations(
                        "homePage.signupForm.formInputs.lastName"
                    )}`}
                />
            </div>
            <div className="mb-5 grid grid-cols-1 gap-2">
                <input
                    className="shadow appearance-none rounded-sm w-full py-2 px-5 border-[#1A1A1A] border-l-2  text-signupInputText bg-signupInputBg  "
                    id="companyName"
                    type="text"
                    value={company.companyName}
                    onChange={e => changeData(e.target.value, "companyName")}
                    placeholder={`${translations(
                        "homePage.signupForm.formInputs.companyName"
                    )}`}
                />
            </div>
            <div className="mb-5 grid grid-cols-1 gap-2">
                <input
                    className="shadow appearance-none rounded-sm w-full py-2 px-5 border-[#1A1A1A] border-l-2  text-signupInputText bg-signupInputBg  "
                    id="email"
                    type="email"
                    value={company.email}
                    onChange={e => changeData(e.target.value, "email")}
                    placeholder={`${translations(
                        "homePage.signupForm.formInputs.eMail"
                    )}`}
                />
            </div>
            <div className="mb-5 grid grid-cols-2 gap-2 ">
                <CompanyOption
                    company={company.companySize}
                    changeData={(e: any) =>
                        changeData(e.target.value, "companySize")
                    }
                />
                <CountryOptions
                    company={company.country}
                    changeData={(e: any) =>
                        changeData(e.target.value, "country")
                    }
                />
            </div>
            <div className="mb-5 grid  grid-8 gap-2">
                <input
                    className="shadow appearance-none rounded-sm w-full py-2 px-5 border-[#1A1A1A] border-l-2  text-signupInputText bg-signupInputBg  "
                    id="language"
                    type="text"
                    value={company.language}
                    onChange={e => changeData(e.target.value, "language")}
                    placeholder={`${translations(
                        "homePage.signupForm.formInputs.language"
                    )}`}
                />
            </div>
            <div className="mb-7 grid  grid-8 gap-2">
                <input
                    className="shadow appearance-none rounded-sm w-full py-2 px-5 border-[#1A1A1A] border-l-2  text-signupInputText bg-signupInputBg  "
                    id="password"
                    type="password"
                    value={company.password}
                    onChange={e => changeData(e.target.value, "password")}
                    placeholder={`${translations(
                        "homePage.signupForm.formInputs.Password"
                    )}`}
                />
            </div>
            <div className="flex items-center text-center justify-between object-center content-center ">
                <button
                    className="bg-blue-500 hover:bg-blue-700 :w-auto text-white font-bold py-2 px-4 rounded-sm "
                    onClick={handleSubmit}
                    type="button"
                >
                    {translations("homePage.signupForm.signupBtnText")}
                </button>
                <p className="text-auto  self-center text-signupTitleText ">
                    {translations("homePage.signupForm.alreadyAccount")}
                    <Link href="/auth/login">
                        {translations("homePage.signupForm.loginBtnText")}
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default Form;
