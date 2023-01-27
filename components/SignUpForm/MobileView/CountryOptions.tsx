import React from "react";
import { useTranslation } from "next-i18next";

interface myprops {
    company: any;
    changeData: any;
}

const CountryOptions = ({ company, changeData }: myprops) => {
    const { t: translations } = useTranslation();

    return (
        <select
            className="shadow  appearance-none rounded-sm w-full py-2 px-5 border-[#1A1A1A] border-l-2  text-signupInputText bg-signupInputBg  "
            value={company}
            onChange={changeData}
        >
            <option className="text-black" value="title">
                {translations("homePage.signupForm.formInputs.Country.title")}
            </option>
            <option className="text-black" value="Afghanistan">
                {translations(
                    "homePage.signupForm.formInputs.Country.Afghanistan"
                )}
            </option>
            <option className="text-black" value="Albania">
                {translations("homePage.signupForm.formInputs.Country.Albania")}
            </option>
        </select>
    );
};

export default CountryOptions;
