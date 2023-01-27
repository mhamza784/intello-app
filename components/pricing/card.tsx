import React from "react";
import cx from "classnames";
import { myprops } from "./pricing.interface";

const Card = (props: myprops) => {
    const { isActive } = props;
    const { title, description, textAbovePrice, price, discount, buttonText } =
        props;

    const mainDivClasses = cx(
        { "text-white bg-cardBackground py-14 max-md:py-8": isActive },
        { "text-greyText py-8 md:my-6": !isActive },
        "shadow-[0_10px_20px_1px_rgba(0,0,0,0.2)] text-center rounded-2xl px-5 max-md:px-12 md:mx-8"
    );
    const titleClasses = cx(
        { "text-black": !isActive },
        "font-poppins font-medium text-2xl max-md:text-3xl mb-[10%]"
    );
    const priceClasses = cx(
        { "max-md:text-3xl": isActive },
        { "text-lightBlueText": !isActive },
        "font-poppins font-medium text-2xl"
    );
    const buttonClasses = cx(
        { "bg-darkBlueBtnBg": isActive },
        { "bg-cardBackground text-footerBg": !isActive },
        "btn px-3 py-1 max-md:text-2xl rounded-2xl mt-[10%]"
    );

    return (
        <div className={mainDivClasses}>
            <p className={titleClasses}>{title}</p>
            <p className="mb-[10%]">{description}</p>
            <p>{textAbovePrice}</p>
            <span className={priceClasses}>{price}</span>
            <p>{discount}</p>
            <button type="button" className={buttonClasses}>
                {buttonText}
            </button>
        </div>
    );
};

export default Card;
