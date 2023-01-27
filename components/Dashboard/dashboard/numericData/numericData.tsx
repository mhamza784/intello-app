/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useTranslation } from "react-i18next";
import Card from "./card";
import { myprops } from "./numericData.interface";

const NumericData = () => {
    const { t: translations } = useTranslation();
    const mapElements: any = translations("dashboard.numericData", {
        returnObjects: true,
    });

    const cards = mapElements.map((element: myprops, index: number) => (
        <Card
            key={index}
            img={element.img}
            title={element.title}
            count={element.count}
            subCount={element.subCount}
        />
    ));
    return (
        <div className="grid grid-flow-col py-5 max-md:gap-10 max-md:justify-center">
            {cards}
        </div>
    );
};

export default NumericData;
