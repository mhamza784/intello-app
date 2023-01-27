import { useTranslation } from "next-i18next";
import Card from "./Card";
import { myprops } from "./features.interface";

const CardSection = () => {
    const { t: translations } = useTranslation();
    const mapElements: any = translations("arrayFeaturesCards", {
        returnObjects: true,
    });
    const cards = mapElements.map((element: myprops, index: number) => (
        <Card
            title={element.title}
            img={element.img}
            isActive={index === 2 || index === 3}
        />
    ));

    return (
        <div className=" self-center place-items-stretch  content-center justify-items-center  grid grid-cols-2 md:grid-cols-3 py-12   gap-x-4 sm:gap-x-8 md:gap-x-16 px-7 sm:px-36 md:px-72 not-italic  ">
            {cards}
        </div>
    );
};
export default CardSection;
