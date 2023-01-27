import React from "react";
import { useTranslation } from "next-i18next";
import { Tabs, Button } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import Contact from "./Contact";
import Address from "./Address";
import PaymentDetails from "./PaymentDetails/paymentDetails";
import PaymentTerms from "./PaymentTerms";

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
                                    "dashboardForm.createSupplier.button.address.btnName"
                                )}
                            </p>
                        </Button>
                    ),
                    key: "1",
                    children: <Address />,
                },
                {
                    label: (
                        <Button className={styles.QuoteAnalysisReceivingBtn}>
                            <p className="font-semibold text-base self-center ">
                                {translations(
                                    "dashboardForm.createSupplier.button.contact.btnName"
                                )}
                            </p>
                        </Button>
                    ),
                    key: "2",
                    children: <Contact />,
                },
                {
                    label: (
                        <Button className={styles.QuoteAnalysisReceivingBtn}>
                            <p className="font-semibold text-base self-center ">
                                {translations(
                                    "dashboardForm.createSupplier.button.paymentDetails.btnName"
                                )}
                            </p>
                        </Button>
                    ),
                    key: "3",
                    children: <PaymentDetails />,
                },
                {
                    label: (
                        <Button className={styles.QuoteAnalysisReceivingBtn}>
                            <p className="font-semibold text-base self-center ">
                                {translations(
                                    "dashboardForm.createSupplier.button.paymentTerms.btnName"
                                )}
                            </p>
                        </Button>
                    ),
                    key: "4",
                    children: <PaymentTerms />,
                },
            ]}
        />
    );
};

export default App;
