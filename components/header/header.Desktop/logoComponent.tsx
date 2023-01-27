import React from "react";
import Image from "next/image";

const LogoComponent = () => {
    return (
        <div className="basis-1/4 max-md:basis-1/2 flex justify-center items-center">
            <Image src="/logo.png" height="120" width="240" alt="logo" />
        </div>
    );
};

export default LogoComponent;
