import React from "react";
import Image from "next/image";
import styles from "@/styles/ImageSection.module.css";
import { myprops } from "./aboutUs.interface";

const ImageSection = (props: myprops) => {
    return (
        <div className="basis-[55%] flex justify-center relative">
            <div className="absolute top-[40%] z-10">
                <div className="flex flex-row bg-footerBg w-[45%] max-md:w-[60%] pb-6 pt-8 px-4 max-md:pb-0 max-md:p-2 rounded-2xl">
                    <div className="basis-1/4 max-sm:basis-1/5">
                        <Image
                            width="44"
                            height="44"
                            src="/ellipse24.png"
                            className={styles.imageEllipse24}
                            alt=""
                        />
                    </div>
                    <div className="basis-3/4 max-sm:basis-4/5 text-white text-xs max-md:text-[10px] max-sm:text-[8px] font-normal">
                        {/* eslint-disable-next-line react/destructuring-assignment */}
                        <p>{props.textInImage}</p>
                    </div>
                </div>
            </div>
            <Image
                src="/erp.png"
                width="380"
                height="300"
                className={styles.imageERP}
                alt=""
            />
        </div>
    );
};

export default ImageSection;
