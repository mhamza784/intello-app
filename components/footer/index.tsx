import React from "react";
import FooterLinks from "./footerLinks";
import LogoComponent from "./logoComponent";

const Footer = () => {
    return (
        <div className="flex flex-row bg-footerBg pt-10 pb-12 mt-8">
            <LogoComponent />
            <FooterLinks />
        </div>
    );
};

export default Footer;
