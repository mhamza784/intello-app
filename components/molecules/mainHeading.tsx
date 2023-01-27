import React from "react";
import { myprops } from "../pricing/pricing.interface";

const MainHeading = (props: myprops) => {
    const { title } = props;
    return (
        <div className="flex flex-row justify-center items-center">
            <span className="font-helvetica font-bold text-5xl">{title}</span>
        </div>
    );
};

export default MainHeading;
