import React from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";

interface DataType {
    key: string;
    prDate: string;
    prNO: string;
    description: string;
    preparedBy: string;
    workFlow: string;
    status: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "PR Date",
        dataIndex: "prDate",
        key: "prDate",
        width: "13%",
    },
    {
        title: "PR NO",
        dataIndex: "prNO",
        key: "prNO",
        width: "13%",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
        width: "13%",
    },
    {
        title: "Prepared by",
        dataIndex: "preparedBy",
        key: "preparedBy",
        width: "14%",
    },
    {
        title: "Workflow Status",
        dataIndex: "workFlow",
        key: "workFlow",
        width: "14%",
    },
    {
        title: "PR Status",
        dataIndex: "status",
        key: "status",
        width: "14%",
    },
    {
        title: "Action",
        key: "action",
        width: "15%",

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
        prDate: "02/10/2022",
        prNO: "1",
        description: "xyz",
        preparedBy: "xyz",
        workFlow: "Pending",
        status: "Close",
    },
    {
        key: "2",
        prDate: "02/10/2022",
        prNO: "2",
        description: "xyz",
        preparedBy: "xyz",
        workFlow: "Approved",
        status: "Open",
    },
];

const App: React.FC = () => {
    return (
        <Table
            size="middle"
            columns={columns}
            dataSource={data}
            className={styles.mainAccount}
            scroll={{ x: 1000, y: 250 }}
        />
    );
};

export default App;
