import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    personID: string;
    personName: string;
    personDestination: string;
    status: string;
    receivingDate: string;
    approvalDate: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Person ID",
        dataIndex: "personID",
        key: "personID",
        width: "14%",
    },
    {
        title: "Person Name",
        dataIndex: "personName",
        key: "personAccount",
        width: "16%",
    },
    {
        title: "Person Designation",
        dataIndex: "personDestination",
        key: "personDestination",
        width: "24%",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: "14%",
    },
    {
        title: "Reviewing date and time",
        dataIndex: "receivingDate",
        key: "receivingDate",
        width: "24%",
    },
    {
        title: "Approval date and time",
        dataIndex: "approvalDate",
        key: "approvalDate",
        width: "24%",
    },
];

const data: DataType[] = [
    {
        key: "",
        personID: "HCM-0001",
        personName: "xyz",
        personDestination: "Manager Procurement",
        status: "Pending",
        receivingDate: "12/14/2022  9:30:00 PM",
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
            scroll={{ x: 600, y: 200 }}
        />
    );
};

export default App;
