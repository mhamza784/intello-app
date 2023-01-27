import { useTranslation } from "next-i18next";
import { Form, Input, Col, Row } from "antd";
import styles from "@/styles/PaymentForm.module.css";
import MultipleInvoices from "./MultipleInvoices/Index";

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    return (
        <Form size="middle" className={styles.poForm} layout="vertical">
            <Form.Item
                label={
                    <span className="font-semibold text-xs  ">
                        {translations("dashboardForm.payment.invoiceNum")}
                    </span>
                }
            >
                <Row>
                    <Col span={10}>
                        <Input
                            type="string"
                            name="supplierName"
                            className="form-control"
                        />
                    </Col>
                    <Col span={2}>
                        <div className="text-center items-center justify-center">
                            <MultipleInvoices />
                        </div>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
