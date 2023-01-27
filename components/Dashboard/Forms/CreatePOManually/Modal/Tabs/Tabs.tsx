import React from "react";
import { useTranslation } from "next-i18next";
import { Tabs, Button } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import ReceivingForm from "./ReceivingForm";
import MainForm from "./MainForm";

const onChange = () => null;

const App: React.FC = () => {
    const { t: translations } = useTranslation();

    return (
        <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
                {
                    label: (
                        <Button className={styles.QuoteAnalysisMainBtn}>
                            <p className="font-semibold text-base self-center ">
                                {translations(
                                    "dashboardForm.poManually.modal.mainForm.mainBtn"
                                )}
                            </p>
                        </Button>
                    ),
                    key: "1",
                    children: <MainForm />,
                },
                {
                    label: (
                        <Button className={styles.QuoteAnalysisReceivingBtn}>
                            <p className="font-semibold text-base self-center ">
                                {translations(
                                    "dashboardForm.poManually.modal.receivingForm.receivingControlsBtn"
                                )}
                            </p>
                        </Button>
                    ),
                    key: "2",
                    children: <ReceivingForm />,
                },
            ]}
        />
    );
};

export default App;
