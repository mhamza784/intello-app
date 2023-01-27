import React from "react";
import { useTranslation } from "next-i18next";
import HeaderSection from "../topBar/HeaderSection";
import Form from "./Form";

const Index = () => {
    const { t: translations } = useTranslation();
    return (
        <div className="bg-white w-full h-full px-4 pt-6 rounded-2xl ">
            <HeaderSection
                title={translations("dashboardForm.formHeader.title.currency")}
            />
            <div className="px-4">
                <Form />
            </div>
        </div>
    );
};

export default Index;
