import React from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/PurchaseInvoice.module.css";

interface DataType {
    key: string;
    origin: number;
    pONO: string;
    invoiceDate: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Origin",
        dataIndex: "origin",
        key: "origin",
        width: "10%",
    },
    {
        title: "PO NO",
        dataIndex: "pONO",
        key: "pONO",
        width: "14%",
    },
    {
        title: "Invoice Date",
        dataIndex: "invoiceDate",
        key: "invoiceDate",
        width: "14%",
    },
    {
        title: "Invoice No",
        dataIndex: "invoiceNo",
        key: "invoiceNo",
        width: "14%",
    },
    {
        title: "Supplier",
        dataIndex: "supplier",
        key: "supplier",
        width: "14%",
    },
    {
        title: "Supplier Group",
        dataIndex: "supplierGroup",
        key: "supplierGroup",
        width: "14%",
    },
    {
        title: "Prepare By",
        dataIndex: "prepareBy",
        key: "prepareBy",
        width: "15%",
    },
    {
        title: "Approval Status",
        dataIndex: "approvalStatus",
        key: "approvalStatus",
        width: "14%",
    },
    {
        title: "Prepare Invoice Status",
        dataIndex: "invoiceStatus ",
        key: "invoiceStatus",
        width: "19%",
    },
    {
        title: "Action",
        key: "action",
        width: "18%",

        render: () => (
            <Space size="small">
                <div>
                    <Button type="primary" className={styles.editTableBtn}>
                        <p className="text-sm self-center text-center">Edit</p>
                    </Button>
                </div>
                <Button type="primary" className={styles.editTableBtn}>
                    <p className="text-sm self-center text-center">Delete</p>
                </Button>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: "1",
        origin: 1,
        pONO: "12345",
        invoiceDate: "",
    },
    {
        key: "2",
        origin: 2,
        pONO: "123467",
        invoiceDate: "",
    },
];

const App: React.FC = () => {
    return (
        <Table
            size="small"
            columns={columns}
            dataSource={data}
            className={styles.mainAccount}
            scroll={{ x: 700, y: 200 }}
        />
    );
};

export default App;
