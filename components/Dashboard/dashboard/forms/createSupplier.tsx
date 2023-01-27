import { UploadOutlined } from "@ant-design/icons";
import {
    Form,
    Input,
    Button,
    Col,
    Select,
    Row,
    Radio,
    Checkbox,
    Upload,
} from "antd";
import React from "react";
import styles from "../../../styles/DashboardForm.module.css";

const DashboardForm = (): JSX.Element => {
    return (
        <div className="p-10">
            <p className="text-2xl font-semibold mb-0">Basic Information</p>
            <Form size="middle" className={styles.form}>
                <Form.Item>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Radio.Group>
                                <Radio value="Company">Company</Radio>
                                <Radio value="Individuals">Individuals</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={12}>
                            <Checkbox>Allow Withholding Tax</Checkbox>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Row gutter={24}>
                        <Col span={12}>
                            <span className="font-semibold text-xs">Name</span>
                            <Input />
                        </Col>
                        <Col span={12}>
                            <span className="font-semibold text-xs">
                                Inactive Data
                            </span>
                            <Input />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item>
                    <Row gutter={24}>
                        <Col span={12}>
                            <span className="font-semibold text-xs">
                                Supplier Number
                            </span>
                            <Input />
                        </Col>
                        <Col span={12}>
                            <span className="font-semibold text-xs">
                                Tax Registration Number
                            </span>
                            <Input />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Row gutter={24}>
                        <Col span={12}>
                            <span className="font-semibold text-xs">
                                Website
                            </span>
                            <Input />
                        </Col>
                        <Col span={12}>
                            <span className="font-semibold text-xs">
                                Status
                            </span>
                            <Input />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Row gutter={24}>
                        <Col span={12}>
                            <span className="font-semibold text-xs  ">
                                Country
                            </span>
                            <Select />
                        </Col>
                        <Col span={12}>
                            <Col span={24}>
                                <Row gutter={12}>
                                    <Checkbox>Purchasing</Checkbox>
                                </Row>
                                <Row gutter={12}>
                                    <Form.Item>
                                        <Checkbox>Payment</Checkbox>
                                    </Form.Item>
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Row gutter={24}>
                        <Col span={20}>
                            <Checkbox>All Invoices</Checkbox>
                        </Col>
                        <Col span={4}>
                            <Form.Item valuePropName="fileList">
                                <Upload
                                    name="logo"
                                    action="/upload.do"
                                    listType="picture"
                                >
                                    <Button icon={<UploadOutlined />}>
                                        Add attachment
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Radio.Group className={styles.radioGroupWrapper}>
                        <Radio.Button
                            className={styles.radioGroup}
                            value="Address"
                        >
                            Address
                        </Radio.Button>
                        <Radio.Button
                            className={styles.radioGroup}
                            value="Contact"
                        >
                            Contact
                        </Radio.Button>
                        <Radio.Button
                            className={styles.radioGroup}
                            value="Detail"
                        >
                            Payment Detail
                        </Radio.Button>
                        <Radio.Button
                            className={styles.radioGroup}
                            value="Terms"
                        >
                            Payment Terms
                        </Radio.Button>
                        <Radio.Button
                            className={styles.radioGroup}
                            value="Accounting"
                        >
                            Accounting
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <div className={styles.radioGroupDiv}>
                    <Form.Item>
                        <Row gutter={24}>
                            <Col span={12}>
                                <span className="font-semibold text-xs  ">
                                    Country
                                </span>
                                <Select />
                            </Col>
                            <Col span={12}>
                                <span className="font-semibold text-xs">
                                    City
                                </span>
                                <Input />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Row gutter={24}>
                            <Col span={12}>
                                <span className="font-semibold text-xs">
                                    Address
                                </span>
                                <Input />
                            </Col>
                            <Col span={12}>
                                <span className="font-semibold text-xs">
                                    Email
                                </span>
                                <Input />
                            </Col>
                        </Row>
                    </Form.Item>
                </div>
                <Form.Item>
                    <span className="flex -order-last justify-end">
                        <Button className={styles.button1}>Save</Button>
                    </span>
                </Form.Item>
            </Form>
        </div>
    );
};

export default DashboardForm;
