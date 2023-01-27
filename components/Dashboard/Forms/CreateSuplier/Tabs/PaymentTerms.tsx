import React from "react";
import { useTranslation } from "next-i18next";
import { Form, Col, Row, Select } from "antd";
import styles from "@/styles/DashboardForm.module.css";

const PaymentTerms = () => {
    const { t: translations } = useTranslation();

    return (
        <Form size="middle">
            <Form.Item className={styles.inputMargin}>
                <Row gutter={24}>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.button.paymentTerms.paymentCurrency"
                            )}
                        </span>
                        <Select />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.button.paymentTerms.paymentTerms"
                            )}
                        </span>

                        <Select />
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default PaymentTerms;
