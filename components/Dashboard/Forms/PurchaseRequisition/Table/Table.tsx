import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    num: string;
    items: string;
    description: string;
    UOM: string;
    supplierName: string;
    requester: string;
    quantity: string;
    price: string;
    total: string;
    needBy: string;
    status: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Num",
        dataIndex: "num",
        key: "num",
        width: "5%",
    },
    {
        title: "Items",
        dataIndex: "items",
        key: "items",
        width: "6%",
    },
    {
        title: "Items Description",
        dataIndex: "description",
        key: "description",
        width: "12%",
    },
    {
        title: "UOM",
        dataIndex: "UOM",
        key: "name",
    },
    {
        title: "Supplier Name",
        dataIndex: "supplierName",
        key: "supplierName",
    },
    {
        title: "Requester",
        dataIndex: "requester",
        key: "requester",
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
        title: "Total",
        dataIndex: "total",
        key: "total",
    },
    {
        title: "Need By (Date)",
        dataIndex: "needBy",
        key: "needBy",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
    },
];

const data: DataType[] = [
    {
        key: "1",
        num: "001",
        items: "xyz",
        description: "lorium ipsum",
        UOM: "UOM",
        supplierName: "xyz",
        requester: "xyz",
        quantity: "xyz",
        price: "xyz",
        total: "xyz",
        needBy: "xyz",
        status: "PO",
    },
    {
        key: "1",
        num: "001",
        items: "xyz",
        description: "lorium ipsum",
        UOM: "UOM",
        supplierName: "xyz",
        requester: "xyz",
        quantity: "xyz",
        price: "xyz",
        total: "xyz",
        needBy: "xyz",
        status: "Pending",
    },
];

const FormTable = () => {
    return (
        <Table
            size="small"
            className={styles.PurchaseFormTable}
            columns={columns}
            dataSource={data}
            scroll={{ x: 1000, y: 400 }}
        />
    );
};

export default FormTable;
