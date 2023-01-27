import React from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "@/styles/DashboardForm.module.css";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

interface DataType {
    key: string;
    paymentID: number;
    supplierName: string;
    supplierGroup: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Payment ID",
        dataIndex: "paymentID",
        key: "paymentID",
        width: "10%",
    },
    {
        title: "Supplier Name",
        dataIndex: "supplierName",
        key: "supplierName",
        width: "14%",
    },
    {
        title: "Supplier Group",
        dataIndex: "supplierGroup",
        key: "supplierGroup",
        width: "14%",
    },
    {
        title: "Payment Date",
        dataIndex: "paymentDate",
        key: "paymentDate",
        width: "14%",
    },
    {
        title: "Approval Status",
        dataIndex: "approvalStatus",
        key: "approvalStatus",
        width: "14%",
    },
    {
        title: "Payment Status",
        dataIndex: "paymentStatus",
        key: "paymentStatus",
        width: "14%",
    },
    {
        title: "Action",
        key: "action",
        width: "18%",

        render: () => (
            <Space size="small" className="flex space-x-4">
                <Button>
                    <BiEdit />
                </Button>
                <Button>
                    <MdDeleteForever />
                </Button>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: "1",
        paymentID: 1,
        supplierName: "12345",
        supplierGroup: "",
    },
    {
        key: "2",
        paymentID: 2,
        supplierName: "123467",
        supplierGroup: "",
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
