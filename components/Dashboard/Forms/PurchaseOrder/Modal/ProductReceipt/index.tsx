import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Button, Modal } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import Table from "./Table";
import HistoryTable from "./HistoryTable";

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
            <Button className={styles.button11} onClick={showModal}>
                {translations(
                    "dashboardForm.purchaseOrder.button.productReceived"
                )}
            </Button>
            <Modal
                onCancel={handleCancel}
                title={
                    <div className="flex text-center justify-center  items-center  bg-lightGrayBg h-10 rounded-lg px-6 pl-6 md:pl-14 ">
                        <h2 className="text-black justify-center text-center self-center text-base font-bold md:text-xl">
                            {translations(
                                "dashboardForm.purchaseOrder.productReceived.title"
                            )}
                        </h2>
                    </div>
                }
                width={1800}
                open={isModalOpen}
                onOk={handleOk}
            >
                <Table />
                <div className="font-bold text-xs px-2 pt-3 pb-2 ">
                    {translations(
                        "dashboardForm.purchaseOrder.productReceived.history"
                    )}
                </div>
                <HistoryTable />
            </Modal>
        </>
    );
};

export default Index;
