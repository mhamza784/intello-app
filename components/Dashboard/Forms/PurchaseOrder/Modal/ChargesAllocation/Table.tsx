import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    chargesID: string;
    chargesName: string;
    basis: string;
    line: string;
    amount: string;
    approvalDate: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Charges ID",
        dataIndex: "chargesID",
        key: "chargesID",
        width: "16%",
    },
    {
        title: "Charges Name",
        dataIndex: "chargesName",
        key: "chargesName",
        width: "16%",
    },
    {
        title: "Basis",
        dataIndex: "basis",
        key: "basis",
        width: "16%",
    },
    {
        title: "Line",
        dataIndex: "line",
        key: "line",
        width: "16%",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
        width: "16%",
    },
];

const data: DataType[] = [
    {
        key: "",
        chargesID: "",
        chargesName: "",
        basis: "",
        line: "",
        amount: "",
        approvalDate: "",
    },
];

const App: React.FC = () => {
    return (
        <Table
            size="large"
            columns={columns}
            dataSource={data}
            className={styles.mainAccount}
            scroll={{ x: 600, y: 600 }}
        />
    );
};

export default App;
