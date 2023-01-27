import React from "react";
import { useTranslation } from "next-i18next";
import Topbar from "@/components/Dashboard/SideBar/index";
import styles from "@/styles/DashboardForm.module.css";
import { Button } from "antd";
import CreateNew from "./Model/Index";
import Table from "./Table/Table";

const Index = () => {
    const { t: translations } = useTranslation();

    return (
        <div className="bg-white w-full h-full px-1 md:px-3 rounded-2xl">
            <Topbar />
            <div className="border-2 mx-4 rounded-2xl border-solid border-dashboardFormBorder">
                <div className="flex text-center justify-between  items-center  bg-lightGrayBg rounded-t-lg px-6 h-12 m-1 ">
                    <h2 className="text-darkBlueText order-first mt-[.7%]  text-center self-center font-bold text-xs md:text-base">
                        {translations("dashboardForm.formHeader.title.payment")}
                    </h2>
                </div>
                <div className="px-4">
                    <Table />
                </div>
            </div>
            <span className="gap-2 flex mx-4 -order-first justify-end mt-6">
                <Button className={styles.button1} htmlType="submit">
                    {translations(
                        "dashboardForm.purchaseInvoice.purchaseInvoiceForm.btn.viewDetail"
                    )}
                </Button>
                <CreateNew />
                <Button className={styles.button1} htmlType="submit">
                    {translations(
                        "dashboardForm.purchaseInvoice.purchaseInvoiceForm.btn.save"
                    )}
                </Button>
            </span>
        </div>
    );
};

export default Index;
