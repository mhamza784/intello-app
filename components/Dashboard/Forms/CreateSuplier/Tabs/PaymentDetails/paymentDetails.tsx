import React from "react";
import { useTranslation } from "next-i18next";
import Checkbox from "./CheckBox";

const PaymentDetails = () => {
    const { t: translations } = useTranslation();

    return (
        <div>
            <div className="font-semibold text-sm pb-3 ">
                {translations(
                    "dashboardForm.createSupplier.button.paymentDetails.title"
                )}
            </div>
            <Checkbox />
        </div>
    );
};

export default PaymentDetails;
