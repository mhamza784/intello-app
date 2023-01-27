import React from "react";
import { useTranslation } from "next-i18next";
import { Form, Input, Col, Row, Select } from "antd";
import styles from "@/styles/DashboardForm.module.css";

const Contact = () => {
    const { t: translations } = useTranslation();

    return (
        <div style={{ paddingBottom: "4rem" }}>
            <Form size="middle">
                <Form.Item className={styles.inputMargin}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.createSupplier.button.contact.contactTitle"
                                )}
                            </span>
                            <Select />
                        </Col>
                        <Col span={8}>
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.createSupplier.button.contact.name"
                                )}
                            </span>

                            <Input />
                        </Col>
                        <Col span={8}>
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.createSupplier.button.contact.jobTitle"
                                )}
                            </span>
                            <Input
                                type="string"
                                name="postalCode"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item className={styles.inputMargin}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.createSupplier.button.contact.department"
                                )}
                            </span>
                            <Input />
                        </Col>
                        <Col span={8}>
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.createSupplier.button.contact.phoneNumber"
                                )}
                            </span>

                            <Input />
                        </Col>
                        <Col span={8}>
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.createSupplier.button.contact.mobileNumber"
                                )}
                            </span>
                            <Input
                                type="string"
                                name="postalCode"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item className={styles.inputMargin}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.createSupplier.button.contact.emailAddress"
                                )}
                            </span>
                            <Input />
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Contact;
