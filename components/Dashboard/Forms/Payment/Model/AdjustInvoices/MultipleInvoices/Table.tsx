import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/PaymentForm.module.css";

interface DataType {
    key: number;
    invoiceNO: string;
    invoiceDate: string;
    SupplierID: string;
    supplierName: string;
    invoiceAmount: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Invoice NO",
        dataIndex: "invoiceNO",
        key: "invoiceNO",
    },
    {
        title: "Invoice Date",
        dataIndex: "invoiceDate",
        key: "invoiceDate",
    },
    {
        title: "Supplier ID",
        dataIndex: "SupplierID",
        key: "SupplierID",
    },
    {
        title: "Supplier Name",
        dataIndex: "supplierName",
        key: "supplierName",
    },
    {
        title: "Pending Invoice Amount",
        dataIndex: "invoiceAmount",
        key: "invoiceAmount",
    },
];

const data: DataType[] = [
    {
        key: 1,
        invoiceNO: "HCM-0001",
        invoiceDate: "xyz",
        SupplierID: "123 ",
        supplierName: "xyz",
        invoiceAmount: "1234 ",
    },
    {
        key: 2,
        invoiceNO: "HCM-0001",
        invoiceDate: "xyz",
        SupplierID: "123",
        supplierName: "xyz",
        invoiceAmount: "1234",
    },
    {
        key: 3,
        invoiceNO: "HCM-0001",
        invoiceDate: "xyz",
        SupplierID: "123",
        supplierName: "xyz",
        invoiceAmount: "1234",
    },
];

const App: React.FC = () => {
    const [select, setSelect] = useState({
        selectedRowKeys: [],
    });

    const { selectedRowKeys } = select;

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKey: any) => {
            setSelect({
                ...select,
                selectedRowKeys: selectedRowKey,
            });
        },
    };

    return (
        <Table
            size="small"
            columns={columns}
            dataSource={data}
            rowSelection={rowSelection}
            className={styles.mainAccount}
            scroll={{ x: 600, y: 250 }}
        />
    );
};

export default App;
