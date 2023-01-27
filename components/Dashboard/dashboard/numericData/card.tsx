import Image from "next/image";
import React from "react";
import { myprops } from "./numericData.interface";

const Card = ({ img, title, count, subCount }: myprops) => {
    return (
        <div className="mx-6 rounded-xl shadow-[0_10px_20px_1px_rgba(0,0,0,0.2)]">
            <div className="flex">
                <div className="p-2">
                    <Image src={img} width={50} height={50} alt="" />
                </div>
                <span className="text-2xl font-bold font-helvetica place-self-center px-3 text-darkGreyText">
                    {title}
                </span>
            </div>
            <div className="flex flex-col mt-3">
                <span className="text-4xl font-bold font-helvetica pl-3">
                    {count}
                </span>
                <span className="text-lg font-normal font-helvetica text-cardBackground pl-3">
                    {subCount}
                </span>
            </div>
        </div>
    );
};

export default Card;
