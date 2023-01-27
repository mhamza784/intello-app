import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "@/styles/PaymentForm.module.css";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

const RadioButton = () => {
    const [value, setValue] = useState(1);

    const { t: translations } = useTranslation();

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    return (
        <Radio.Group
            className={styles.radioBtnTitle}
            onChange={onChange}
            value={value}
        >
            <Radio className={styles.raidBtnSpace} value={1}>
                {translations("dashboardForm.payment.radioButton.bank")}
            </Radio>
            <Radio value={2}>
                {translations("dashboardForm.payment.radioButton.cash")}
            </Radio>
        </Radio.Group>
    );
};

export default RadioButton;
