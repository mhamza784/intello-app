import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Button, Modal } from "antd";
import styles from "@/styles/PaymentForm.module.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import Table from "./Table";

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
            <Button onClick={showModal} className={styles.plusButton}>
                <span className="text-center items-center">
                    <PlusCircleOutlined className="text-xl self-center place-self-center" />
                </span>
            </Button>
            <Modal
                onCancel={handleCancel}
                title={
                    <div className="flex text-center justify-center  items-center  bg-lightGrayBg h-10 rounded-lg px-6 pl-6 md:pl-14 ">
                        <h2 className="text-black justify-center text-center self-center text-base font-bold md:text-xl">
                            {translations(
                                "dashboardForm.payment.AdjustInvoices.title"
                            )}
                        </h2>
                    </div>
                }
                width={1800}
                open={isModalOpen}
                onOk={handleOk}
                footer={[
                    <Button className={styles.button1} onClick={handleOk}>
                        {translations(
                            "dashboardForm.payment.AdjustInvoices.ok"
                        )}
                    </Button>,
                ]}
            >
                <div className="border-2 mx-4 rounded-2xl border-solid border-dashboardFormBorder">
                    <Table />
                </div>
            </Modal>
        </>
    );
};

export default Index;
