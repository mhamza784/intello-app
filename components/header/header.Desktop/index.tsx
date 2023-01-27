import React from "react";
import Navbar from "./navbar";
import UnderNavbarSection from "./underNavbarSection";

const HeaderDesktop = () => {
    return (
        <div className="max-md:hidden mb-[10rem]">
            <Navbar />
            <UnderNavbarSection />
        </div>
    );
};

export default HeaderDesktop;
