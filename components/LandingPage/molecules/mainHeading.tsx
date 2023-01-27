import React from "react";

const MainHeading = (props: any) => {
    const { title } = props;

    return (
        <div className="flex flex-row justify-center items-center">
            <span className="font-bold  items-center text-2xl sm:text-2xl  lg:text-5xl mb-0 ">
                {title}
            </span>
        </div>
    );
};
export default MainHeading;
