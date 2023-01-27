import React from "react";
import Navbar from "./navbar";
import UnderNavbarSection from "./underNavbarSection";

const HeaderMobile = () => {
    return (
        <div className="mb-2">
            <Navbar />
            <UnderNavbarSection />
        </div>
    );
};

export default HeaderMobile;
