import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    num: string;
    quotation: string;
    supplier: string;
    items: string;
    description: string;
    quoteLine: number;
    price: number;
    quality: string;
    total: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Sequence",
        dataIndex: "num",
        key: "num",
    },
    {
        title: "Quotation",
        dataIndex: "quotation",
        key: "quotation",
    },
    {
        title: "Supplier",
        dataIndex: "supplier",
        key: "supplier",
    },
    {
        title: "Items",
        dataIndex: "items",
        key: "items",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Quote Line",
        dataIndex: "quoteLine",
        key: "quoteLine",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Quality",
        dataIndex: "quality",
        key: "quality",
    },
    {
        title: "Total",
        dataIndex: "total",
        key: "total",
    },
];

const data: DataType[] = [
    {
        key: "1",
        num: "001",
        quotation: "xyz",
        supplier: "lorium ipsum",
        items: "lorium",
        description: "UOM",
        quoteLine: 0.5,
        quality: "lorium",
        price: 5666,
        total: 5666,
    },
    {
        key: "1",
        num: "001",
        quotation: "xyz",
        supplier: "lorium ipsum.",
        items: "lorium",
        description: "UOM",
        quoteLine: 0.5,
        quality: "lorium",
        price: 5666,
        total: 5666,
    },
    {
        key: "1",
        num: "001",
        quotation: "xyz",
        supplier: "lorium ipsum..",
        items: "lorium",
        description: "UOM",
        quoteLine: 0.5,
        quality: "lorium",
        price: 5666,
        total: 5666,
    },
    {
        key: "1",
        num: "001",
        quotation: "xyz",
        supplier: "lorium ipsum",
        items: "lorium",
        description: "UOM",
        quoteLine: 0.5,
        quality: "lorium",
        price: 5666,
        total: 5666,
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
