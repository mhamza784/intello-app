import React from "react";
import Image from "next/image";
import Link from "next/link";

const LogoComponent = () => {
    return (
        <div className="basis-1/4 max-md:basis-1/2 flex justify-center items-center">
            <Link href="/dashboard">
                <Image src="/logo.png" height="120" width="240" alt="logo" />
            </Link>
        </div>
    );
};

export default LogoComponent;
