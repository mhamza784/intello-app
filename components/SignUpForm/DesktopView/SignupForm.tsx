import { useTranslation } from "next-i18next";
import Form from "./Form";

const SignupForm = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="basis-[38%] static py-[5%]">
            <div className="flex  flex-col gap-[6%] justify-center absolute top-[6%] right-[20%]  px-[4%] bg-white  rounded-xl  w-[50%] h-[85%]  drop-shadow-[0_4px_19px_rgba(0,0,0,0.11)]">
                <div className="self-center text-center   flex flex-col pt-5">
                    <span className="font-normal relative text-4xl font-helvetica uppercase leading-[12%]">
                        {translations("homePage.signupForm.formMainHeading")}
                    </span>
                    <div className="p-0 mt-5">
                        <span className=" text-greyText font-normal text-md leading-[42%] tracking-wider font-helvetica">
                            {translations(
                                "homePage.signupForm.textUnderHeading"
                            )}
                        </span>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    );
};

export default SignupForm;
