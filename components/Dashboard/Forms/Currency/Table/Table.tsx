import React from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    currencyCode: number;
    currencyName: string;
    currencySymbol: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Currency Code",
        dataIndex: "currencyCode",
        key: "currencyCode",
        width: "10%",
    },
    {
        title: "Currency Name",
        dataIndex: "currencyName",
        key: "currencyName",
        width: "17%",
    },
    {
        title: "Currency Symbol",
        dataIndex: "currencySymbol",
        key: "currencySymbol",
        width: "17%",
    },
    {
        title: "Action",
        key: "action",
        width: "17%",

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
        currencyCode: 1,
        currencyName: "UAE Darham",
        currencySymbol: "AED",
    },
    {
        key: "2",
        currencyCode: 2,
        currencyName: "Pak Rupees",
        currencySymbol: "PKR",
    },
    {
        key: "3",
        currencyCode: 3,
        currencyName: "Indian Rupees",
        currencySymbol: "INR",
    },
];

const App: React.FC = () => {
    return (
        <Table
            size="middle"
            columns={columns}
            dataSource={data}
            className={styles.mainAccount}
            scroll={{ x: 700, y: 200 }}
        />
    );
};

export default App;
