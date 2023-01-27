import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/PurchaseInvoice.module.css";

interface DataType {
    key: number;
    poNO: string;
    prepaymentNo: string;
    prepaymentAmount: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "PO NO",
        dataIndex: "poNO",
        key: "poNO",
    },
    {
        title: "Prepayment No",
        dataIndex: "prepaymentNo",
        key: "prepaymentNo",
    },
    {
        title: "Prepayment Amount",
        dataIndex: "prepaymentAmount",
        key: "prepaymentAmount",
    },
];

const data: DataType[] = [
    {
        key: 1,
        poNO: "HCM-0001",
        prepaymentNo: "xyz",
        prepaymentAmount: "Manager Procuremnt ",
    },
    {
        key: 2,
        poNO: "HCM-0001",
        prepaymentNo: "xyz",
        prepaymentAmount: "Manager Procurement",
    },
    {
        key: 3,
        poNO: "HCM-0001",
        prepaymentNo: "xyz",
        prepaymentAmount: "Manager Procurement",
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
