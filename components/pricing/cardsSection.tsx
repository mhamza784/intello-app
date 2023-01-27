/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useTranslation } from "next-i18next";
import Card from "./card";
import { myprops } from "./pricing.interface";

const CardsSection = () => {
    const { t: translations } = useTranslation();
    const mapElements: any = translations("arrayOfCards", {
        returnObjects: true,
    });
    const cards = mapElements.map((element: myprops, index: number) => (
        <Card
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={element.title}
            description={element.description}
            discount={element.discount}
            buttonText={element.buttonText}
            textAbovePrice={element.textAbovePrice}
            price={element.price}
            isActive={index % 2 !== 0}
        />
    ));
    return (
        <div>
            <div className="grid md:grid-cols-3 max-md:grid-rows-3 gap-4 max-md:gap-10 mt-16 mx-52 max-md:mx-12 max-md:justify-center max-lg:mx-12">
                {cards}
            </div>
        </div>
    );
};

export default CardsSection;
