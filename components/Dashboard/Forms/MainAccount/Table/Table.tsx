import React from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    srNo: number;
    mainAccount: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Sr. no",
        dataIndex: "srNo",
        key: "srNo",
        width: "10%",
    },
    {
        title: "Main Account Category",
        dataIndex: "mainAccount",
        key: "mainAccount",
        width: "28%",
    },
    {
        title: "Action",
        key: "action",
        width: "14%",
        render: () => (
            <Space size="middle">
                <Button type="primary" className={styles.editTableBtn}>
                    <p className="text-sm self-center text-center">Edit</p>
                </Button>
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
        srNo: 1,
        mainAccount: "Cash and cash equivalent",
    },
    {
        key: "2",
        srNo: 2,
        mainAccount: "Long term Loans",
    },
    {
        key: "3",
        srNo: 3,
        mainAccount: "Long term receivable",
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
