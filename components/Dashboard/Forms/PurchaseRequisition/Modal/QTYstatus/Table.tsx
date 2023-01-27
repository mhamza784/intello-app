import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    itemNumber: string;
    itemName: string;
    qty: string;
    amount: string;
    site: string;
    wareHouse: string;
    location: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Item Number",
        dataIndex: "itemNumber",
        key: "itemNumber",
        width: "20%",
    },
    {
        title: "Item Name",
        dataIndex: "itemName",
        key: "itemName",
        width: "18%",
    },
    {
        title: "QTY",
        dataIndex: "qty",
        key: "qty",
        width: "12%",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
        width: "14%",
    },
    {
        title: "Site",
        dataIndex: "site",
        key: "site",
        width: "24%",
    },
    {
        title: "Warehouse",
        dataIndex: "wareHouse",
        key: "wareHouse",
        width: "24%",
    },
    {
        title: "Location",
        dataIndex: "location",
        key: "location",
        width: "24%",
    },
];

const data: DataType[] = [
    {
        key: "",
        itemNumber: "ABC-0001",
        itemName: "Armour",
        qty: "10",
        amount: "100",
        site: "Main building",
        wareHouse: "store 1",
        location: "shelf 3",
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
