import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Button, Modal } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import Form from "./Form";

const Index = () => {
    const { t: translations } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button
                className={styles.QuoteAnalysisBtn}
                htmlType="submit"
                onClick={showModal}
            >
                <p className="font-semibold text-base self-center ">
                    {translations(
                        "dashboardForm.quoteAnalysis.btnQuoteAnalysis"
                    )}
                </p>
            </Button>
            <Modal
                onCancel={handleCancel}
                title={
                    <div className="flex text-center justify-center  items-center  bg-lightGrayBg h-10 rounded-lg px-6 pl-6 md:pl-14 ">
                        <h2 className="text-black justify-center text-center self-center text-base font-bold md:text-xl">
                            {translations(
                                "dashboardForm.quoteAnalysis.modal.title"
                            )}
                        </h2>
                    </div>
                }
                width={1000}
                open={isModalOpen}
                onOk={handleOk}
                footer={[
                    <Button
                        className={styles.QuoteAnalysisBtn}
                        htmlType="submit"
                        onClick={handleOk}
                    >
                        <p className="font-semibold text-base self-center ">
                            {translations(
                                "dashboardForm.purchaseForm.modal.submitBtn"
                            )}
                        </p>
                    </Button>,
                ]}
            >
                <Form />
            </Modal>
        </>
    );
};

export default Index;
