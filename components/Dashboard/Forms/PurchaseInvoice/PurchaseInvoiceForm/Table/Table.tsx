import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/PurchaseInvoice.module.css";

interface DataType {
    key: string;
    num: string;
    items: string;
    UOM: string;
    expectedArrival: string;
    quantity: number;
    price: number;
    salesTax: any;
    subTotal: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Num",
        dataIndex: "num",
        key: "num",
        width: "8%",
    },
    {
        title: "Items",
        dataIndex: "items",
        key: "items",
    },
    {
        title: "UOM",
        dataIndex: "UOM",
        key: "name",
    },
    {
        title: "Expected Arrival",
        dataIndex: "expectedArrival",
        key: "expectedArrival",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Sales Tax",
        dataIndex: "salesTax",
        key: "salesTax",
    },
    {
        title: "Sub-Total",
        dataIndex: "subTotal",
        key: "subTotal",
    },
];

const data: DataType[] = [
    {
        key: "1",
        num: "001",
        items: "xyz",
        expectedArrival: "13-Nov-2022",
        UOM: "UOM",
        quantity: 0.5,
        price: 5666,
        salesTax: 2,
        subTotal: "1200",
    },
    {
        key: "1",
        num: "001",
        items: "xyz",
        expectedArrival: "13-Nov-2022",
        UOM: "UOM",
        quantity: 0.5,
        price: 5666,
        salesTax: 3,
        subTotal: "1200",
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
