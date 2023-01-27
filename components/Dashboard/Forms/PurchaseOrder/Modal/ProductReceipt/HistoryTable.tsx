import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    itemNum: string;
    itemName: string;
    PRnum: string;
    alreadyReceived: string;
    documentDate: string;
    PRdate: string;
    site: string;
    wareHouse: string;
    location: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Item Number",
        dataIndex: "itemNum",
        key: "itemNum",
        width: "15%",
    },
    {
        title: "Item Name",
        dataIndex: "itemName",
        key: "itemName",
        width: "15%",
    },
    {
        title: "Product Receipt Number",
        dataIndex: "PRnum",
        key: "PRnum",
        width: "22%",
    },
    {
        title: "Already Received",
        dataIndex: "alreadyReceived",
        key: "alreadyReceived",
        width: "16%",
    },
    {
        title: "Document Date",
        dataIndex: "documentDate",
        key: "documentDate",
        width: "16%",
    },
    {
        title: "Product Receipt Date",
        dataIndex: "PRdate",
        key: "PRdate",
        width: "20%",
    },
    {
        title: "Site",
        dataIndex: "site",
        key: "site",
        width: "12%",
    },
    {
        title: "Ware House",
        dataIndex: "wareHouse",
        key: "wareHouse",
        width: "13%",
    },
    {
        title: "Location",
        dataIndex: "location",
        key: "location",
        width: "13%",
    },
];

const data: DataType[] = [
    {
        key: "",
        itemNum: "Auto Populated",
        itemName: "Auto populated",
        PRnum: "Manual",
        alreadyReceived: "Auto populated",
        documentDate: "12/14/2022",
        PRdate: "12/14/2022",
        site: "xyz",
        wareHouse: "xyz",
        location: "xyz",
    },
];

const App: React.FC = () => {
    return (
        <Table
            size="small"
            columns={columns}
            dataSource={data}
            className={styles.mainAccount}
            scroll={{ x: 600, y: 100 }}
        />
    );
};

export default App;
