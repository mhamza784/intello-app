import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    num: string;
    items: string;
    UOM: string;
    description: string;
    quality: number;
    total: number;
    date: any;
}

const columns: ColumnsType<DataType> = [
    {
        title: "PR Num",
        dataIndex: "num",
        key: "num",
    },
    {
        title: "Items",
        dataIndex: "items",
        key: "items",
    },
    {
        title: "Items Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "UOM",
        dataIndex: "UOM",
        key: "UOM",
    },
    {
        title: "Quality",
        dataIndex: "quality",
        key: "quality",
    },
    {
        title: "Unit Price",
        dataIndex: "total",
        key: "total",
    },
    {
        title: "Requester",
        dataIndex: "date",
        key: "date",
    },
];

const data: DataType[] = [
    {
        key: "1",
        num: "001",
        items: "xyz",
        description: "lorium ipsum",
        UOM: "UOM",
        quality: 0.5,
        total: 5666,
        date: "12-Nov-2022",
    },
    {
        key: "1",
        num: "001",
        items: "xyz",
        description: "lorium ipsum.",
        UOM: "UOM",
        quality: 0.5,
        total: 5666,
        date: "13-Nov-2022",
    },
    {
        key: "1",
        num: "001",
        items: "xyz",
        description: "lorium ipsum..",
        UOM: "UOM",
        quality: 0.5,
        total: 5666,
        date: "14-Nov-2022",
    },
    {
        key: "1",
        num: "001",
        items: "xyz",
        description: "lorium ipsum",
        UOM: "UOM",
        quality: 0.5,
        total: 5666,
        date: "15-Nov-2022",
    },
];

const FormTable = () => {
    return (
        <Table
            size="small"
            className={styles.PurchaseFormTable}
            columns={columns}
            dataSource={data}
            scroll={{ x: 1000, y: 200 }}
        />
    );
};

export default FormTable;
