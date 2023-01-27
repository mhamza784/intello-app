import React from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    userID: number;
    name: string;
    phoneNumber: string;
    emailID: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "User ID",
        dataIndex: "userID",
        key: "userID",
        width: "6%",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "13%",
    },
    {
        title: "Phone Number",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
        width: "13%",
    },
    {
        title: "Email ID ",
        dataIndex: "emailID",
        key: "emailID",
        width: "13%",
    },
    {
        title: "Action",
        key: "action",
        width: "13%",
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
        userID: 1,
        name: "xyz",
        phoneNumber: "1234567",
        emailID: "abc@z.com",
    },
    {
        key: "2",
        userID: 2,
        name: "xyz",
        phoneNumber: "1234567",
        emailID: "abc@z.com",
    },
    {
        key: "3",
        userID: 3,
        name: "xyz",
        phoneNumber: "1234567",
        emailID: "abc@z.com",
    },
];

const App: React.FC = () => {
    return (
        <Table
            size="middle"
            columns={columns}
            dataSource={data}
            className={styles.mainAccount}
            scroll={{ x: 600, y: 200 }}
        />
    );
};

export default App;
