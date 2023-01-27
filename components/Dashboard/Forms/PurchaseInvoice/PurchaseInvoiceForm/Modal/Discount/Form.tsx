import { useTranslation } from "next-i18next";
import { Form, Input, Col, Row } from "antd";
import styles from "@/styles/PurchaseInvoice.module.css";

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    return (
        <Form size="middle" className={styles.poForm}>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseInvoice.discountBtn.discountAmount"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="discountAmount"
                            className="form-control"
                        />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseInvoice.discountBtn.discountPercentage"
                            )}
                        </span>
                        <div>
                            <Input
                                type="text"
                                name="discountPercentage"
                                className="form-control"
                            />
                        </div>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
