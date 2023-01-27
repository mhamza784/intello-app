import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

const RadioButton = () => {
    const [value, setValue] = useState(1);

    const { t: translations } = useTranslation();

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <div className="font-bold text-xs pt-3 pb-2 ">
                {translations(
                    "dashboardForm.purchaseOrder.viewPrepayment.radioBtn.title"
                )}
            </div>
            <Radio.Group className="pt-4" onChange={onChange} value={value}>
                <Radio value={1}>
                    {translations(
                        "dashboardForm.purchaseOrder.viewPrepayment.radioBtn.Fixed"
                    )}
                </Radio>
                <Radio value={2}>
                    {translations(
                        "dashboardForm.purchaseOrder.viewPrepayment.radioBtn.Percentage"
                    )}
                </Radio>
            </Radio.Group>
        </div>
    );
};

export default RadioButton;
