import { useTranslation } from "next-i18next";
import { Form, Select, Col, Row } from "antd";
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
                                "dashboardForm.purchaseInvoice.financialDimension.brand"
                            )}
                        </span>
                        <Select />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseInvoice.financialDimension.location"
                            )}
                        </span>
                        <div>
                            <Select />
                        </div>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseInvoice.financialDimension.department"
                            )}
                        </span>
                        <Select />
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
