import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    PODate: string;
    vendorID: string;
    vendorName: string;
    qty: string;
    rate: string;
    amount: string;
    discount: string;
    netAmount: string;
    POStatus: string;
    purchaseID: string;
    purchaserName: string;
    inchargeRemarks: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "PO Date",
        dataIndex: "PODate",
        key: "PODate",
        width: "7%",
    },
    {
        title: "Vendor ID",
        dataIndex: "vendorID",
        key: "vendorID",
        width: "8%",
    },
    {
        title: "Vendor Name",
        dataIndex: "vendorName",
        key: "vendorName",
        width: "9%",
    },
    {
        title: "Qty",
        dataIndex: "qty",
        key: "qty",
        width: "5%",
    },
    {
        title: "Rate",
        dataIndex: "rate",
        key: "rate",
        width: "5%",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
        width: "6%",
    },
    {
        title: "Discount",
        dataIndex: "discount",
        key: "discount",
        width: "7%",
    },
    {
        title: "Net Amount",
        dataIndex: "netAmount",
        key: "netAmount",
        width: "7%",
    },
    {
        title: "PO Status",
        dataIndex: "POStatus",
        key: "POStatus",
        width: "7%",
    },
    {
        title: "Purchaser ID",
        dataIndex: "purchaseID",
        key: "purchaseID",
        width: "7%",
    },
    {
        title: "Purchaser Name",
        dataIndex: "purchaserName",
        key: "purchaserName",
        width: "10%",
    },
    {
        title: "Store Incharge Remarks",
        dataIndex: "inchargeRemarks",
        key: "inchargeRemarks",
        width: "12%",
    },
];

const data: DataType[] = [
    {
        key: "",
        PODate: "12/12/2022",
        vendorID: "Vend-0001",
        vendorName: "xyz",
        qty: "10",
        rate: "150",
        amount: "1500",
        discount: "10%",
        netAmount: "1350",
        POStatus: "Invoiced",
        purchaseID: "0001",
        purchaserName: "Ali usman",
        inchargeRemarks: "goods defective not buy ",
    },
];

const App: React.FC = () => {
    return (
        <Table
            size="small"
            columns={columns}
            dataSource={data}
            className={styles.mainAccount}
            scroll={{ x: 600, y: 600 }}
        />
    );
};

export default App;
