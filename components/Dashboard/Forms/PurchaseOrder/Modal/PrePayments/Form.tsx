import { useTranslation } from "next-i18next";
import { Form, Input, Col, Select, Row } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import RadioButton from "./RadioButton";

const FormModel = () => {
    const { t: translations } = useTranslation();

    return (
        <Form size="middle" className={styles.form}>
            <Form.Item>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseOrder.viewPrepayment.description"
                            )}
                        </span>
                        <Input />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <RadioButton />
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={24}>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseOrder.viewPrepayment.amount"
                            )}
                        </span>
                        <Input />
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseOrder.viewPrepayment.percentage"
                            )}
                        </span>

                        <Input />
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseOrder.viewPrepayment.limit"
                            )}
                        </span>
                        <Input />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={24}>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseOrder.viewPrepayment.prepaymentRemaining"
                            )}
                        </span>
                        <Input />
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseOrder.viewPrepayment.prepaymentApplication"
                            )}
                        </span>

                        <Input />
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseOrder.viewPrepayment.prepaymentCategory"
                            )}
                        </span>
                        <Select />
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default FormModel;
