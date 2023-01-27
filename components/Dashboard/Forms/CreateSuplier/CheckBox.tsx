import { useTranslation } from "next-i18next";
import { Checkbox, Row, Col } from "antd";
import styles from "@/styles/DashboardForm.module.css";

const CheckBox = () => {
    const { t: translations } = useTranslation();

    return (
        <Checkbox.Group className={styles.checkBox}>
            <Row gutter={[24, 4]}>
                <Col span={24}>
                    <Checkbox value="validate">
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.checkBox.purchasing"
                            )}
                        </span>
                    </Checkbox>
                </Col>
                <Col span={24}>
                    <Checkbox value="relatedInvoices">
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.checkBox.payment"
                            )}
                        </span>
                    </Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
    );
};

export default CheckBox;
