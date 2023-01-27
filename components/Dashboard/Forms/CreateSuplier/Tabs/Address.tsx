import React from "react";
import { useTranslation } from "next-i18next";
import { Form, Input, Col, Row, Select } from "antd";
import styles from "@/styles/DashboardForm.module.css";

const Address = () => {
    const { t: translations } = useTranslation();

    return (
        <Form size="middle">
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.createSupplier.button.address.country"
                            )}
                        </span>
                        <Select />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.button.address.address"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="noteSupplier"
                            className="form-control"
                        />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.createSupplier.button.address.city"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="paymentsTerms"
                            className="form-control"
                        />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.button.address.emailAddress"
                            )}
                        </span>
                        <div>
                            <Input
                                type="email"
                                name="createdDate"
                                className="form-control"
                            />
                        </div>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default Address;
