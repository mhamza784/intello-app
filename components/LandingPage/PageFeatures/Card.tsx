import styles from "@/styles/LandingPage.module.css";
import Image from "next/image";
import cx from "classnames";
import { myprops } from "./features.interface";

const Card = (props: myprops) => {
    const { isActive } = props;
    const { title, img } = props;

    const mainDivClasses = cx(
        { "text-white bg-[#5F90EA]": isActive },
        { "text-black ": !isActive },
        " w-36  sm:w-28  md:w-56  h-32  sm:h-40 md:h-52 rounded-md  sm:rounded-xl  md:rounded-3xl shadow-[0_4px_23px_rgba(0,0,0,0.08)]  mb-7 sm:mb-11 md:mb-20 "
    );

    return (
        <div className={mainDivClasses}>
            <Image
                src={img}
                className={styles.cardImg}
                alt="Picture"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                width={600}
                height={600}
            />
            <p className=" font-helvetica font-semibold text-sm sm:text-sm md:text-2xl tracking-[-0.03em] w-32 sm:w-36 md:w-56 pl-2 sm:pl-2 md:pl-6 text-left mt-0 ">
                {title}
            </p>
        </div>
    );
};

export default Card;
