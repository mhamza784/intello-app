import React from "react";
import Navbar from "./navbar";

const HeaderDesktop = () => {
    return (
        <div className="max-md:hidden mb-4">
            <Navbar />
        </div>
    );
};

export default HeaderDesktop;
