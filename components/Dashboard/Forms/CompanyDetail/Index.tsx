import React from "react";
import { useTranslation } from "next-i18next";
import HeaderSection from "../topBar/HeaderSection";
import Form from "./Form";

const Index = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="bg-white w-full h-full px-1 md:px-4 pt-2 md:pt-6 rounded-2xl">
            <HeaderSection
                title={translations("dashboardForm.formHeader.title.form")}
            />
            <div className="mt-6 md:mt-10 border-2 rounded-2xl border-solid border-dashboardFormBorder">
                <div className="flex text-center justify-between  items-center  bg-lightGrayBg rounded-t-lg px-6 h-12 m-1 ">
                    <h2 className="text-darkBlueText order-first mt-[.7%]  text-center self-center font-bold text-xs md:text-base">
                        {translations("dashboardForm.form.title")}
                    </h2>
                </div>
                <Form />
            </div>
        </div>
    );
};

export default Index;
