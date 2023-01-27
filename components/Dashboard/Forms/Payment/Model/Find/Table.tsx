import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/PaymentForm.module.css";

interface DataType {
    key: number;
    invoiceNumber: string;
    paymentAmount: string;
    discountAmount: string;
    netAmount: string;
    whTax: string;
    withHolingTax: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Invoice Number",
        dataIndex: "invoiceNumber",
        key: "invoiceNumber",
    },
    {
        title: "Payment Amount",
        dataIndex: "paymentAmount",
        key: "paymentAmount",
    },
    {
        title: "Discount Amount",
        dataIndex: "discountAmount",
        key: "discountAmount",
    },
    {
        title: "Net Amount",
        dataIndex: "netAmount",
        key: "netAmount",
    },
    {
        title: "WH Tax %",
        dataIndex: "whTax",
        key: "whTax",
    },
    {
        title: "With Holing Tax",
        dataIndex: "withHolingTax",
        key: "withHolingTax",
    },
];

const data: DataType[] = [
    {
        key: 1,
        invoiceNumber: "HCM-0001",
        paymentAmount: "xyz",
        discountAmount: "123",
        netAmount: "xyz",
        whTax: "1234 ",
        withHolingTax: "1234 ",
    },
    {
        key: 2,
        invoiceNumber: "HCM-0001",
        paymentAmount: "xyz",
        discountAmount: "123",
        netAmount: "xyz",
        whTax: "1234",
        withHolingTax: "1234",
    },
    {
        key: 3,
        invoiceNumber: "HCM-0001",
        paymentAmount: "xyz",
        discountAmount: "123",
        netAmount: "xyz",
        whTax: "1234",
        withHolingTax: "1234",
    },
];

const App: React.FC = () => {
    return (
        <Table
            size="small"
            columns={columns}
            dataSource={data}
            className={styles.mainAccount}
            scroll={{ x: 600, y: 250 }}
        />
    );
};

export default App;
