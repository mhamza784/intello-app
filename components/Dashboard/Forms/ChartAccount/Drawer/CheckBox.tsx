import { useTranslation } from "next-i18next";
import { Checkbox, Row, Col } from "antd";
import styles from "@/styles/ChartAccount.module.css";

const CheckBox = () => {
    const { t: translations } = useTranslation();

    return (
        <Checkbox.Group className={styles.checkBox}>
            <Row gutter={[24, 4]}>
                <Col span={24}>
                    <Checkbox value="validate">
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.chartAccount.newForm.checkBox.manualEntry"
                            )}
                        </span>
                    </Checkbox>
                </Col>
                <Col span={24}>
                    <Checkbox value="relatedInvoices">
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.chartAccount.newForm.checkBox.suspended"
                            )}
                        </span>
                    </Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
    );
};

export default CheckBox;
