import React from "react";
import MainHeading from "../molecules/mainHeading";
import { myprops } from "./aboutUs.interface";

const TextSection = (props: myprops) => {
    const { title, description } = props;
    return (
        <div className="basis-[45%] ml-[7%] pr-[8%] my-auto text-justify">
            <div className=" font-helvetica text-5xl font-bold">
                <MainHeading
                    title={title}
                    description=""
                    discount=""
                    buttonText=""
                    textAbovePrice=""
                    price=""
                    isActive={false}
                />
            </div>
            <p className="text-greyText text-xl font-normal leading-[29px] tracking-tight mt-5">
                {description}
            </p>
        </div>
    );
};

export default TextSection;
