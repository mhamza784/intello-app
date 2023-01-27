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
        <Radio.Group className="my-4" onChange={onChange} value={value}>
            <Radio value={1}>
                {translations("dashboardForm.createSupplier.radioBtn.company")}
            </Radio>
            <Radio value={2}>
                {translations(
                    "dashboardForm.createSupplier.radioBtn.individual"
                )}
            </Radio>
        </Radio.Group>
    );
};

export default RadioButton;
