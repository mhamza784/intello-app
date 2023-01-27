import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/ChartAccount.module.css";

interface DataType {
    key: string;
    accountCode: string;
    accountDescription: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Account Code ",
        dataIndex: "accountCode",
        key: "accountCode",
        width: "8%",
    },
    {
        title: "Account description",
        dataIndex: "accountDescription",
        key: "accountDescription",
        width: "40%",
    },
];

const data: DataType[] = [
    {
        key: "1",
        accountCode: "1",
        accountDescription: "Asset",
    },
    {
        key: "2",
        accountCode: "11",
        accountDescription: "Fixed Asset",
    },
    {
        key: "3",
        accountCode: "11100",
        accountDescription: "Property plant and equipment",
    },
];

const FormTable = () => {
    return (
        <Table
            size="large"
            className={styles.PurchaseFormTable}
            columns={columns}
            dataSource={data}
            scroll={{ x: 400, y: 200 }}
        />
    );
};

export default FormTable;
