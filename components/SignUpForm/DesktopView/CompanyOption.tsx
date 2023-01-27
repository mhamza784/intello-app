import React from "react";
import { useTranslation } from "next-i18next";

interface myprops {
    company: any;
    changeData: any;
}

const CompanyOption = ({ company, changeData }: myprops) => {
    const { t: translations } = useTranslation();

    return (
        <select
            className="shadow  appearance-none rounded-sm w-full py-2 px-5 border-[#1A1A1A] border-l-2  text-signupInputText bg-signupInputBg "
            value={company}
            onChange={changeData}
        >
            <option className="text-black" value="title">
                {translations(
                    "homePage.signupForm.formInputs.companySize.title"
                )}
            </option>
            <option className="text-black" value="microSize">
                {translations(
                    "homePage.signupForm.formInputs.companySize.microSize"
                )}
            </option>
            <option className="text-black" value="smallSize">
                {translations(
                    "homePage.signupForm.formInputs.companySize.smallSize"
                )}
            </option>
            <option className="text-black" value="largeSize">
                {translations(
                    "homePage.signupForm.formInputs.companySize.largeSize"
                )}
            </option>
        </select>
    );
};

export default CompanyOption;
