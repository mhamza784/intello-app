import { useTranslation } from "next-i18next";
import { Checkbox, Row, Col } from "antd";
import styles from "@/styles/DashboardForm.module.css";

const CheckBox = () => {
    const { t: translations } = useTranslation();

    return (
        <Checkbox.Group className={styles.checkBox}>
            <Row gutter={[24, 4]}>
                <Col span={24}>
                    <Checkbox value="billPayable">
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.button.paymentDetails.checkBox.billPayable"
                            )}
                        </span>
                    </Checkbox>
                </Col>
                <Col span={24}>
                    <Checkbox value="check">
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.button.paymentDetails.checkBox.check"
                            )}
                        </span>
                    </Checkbox>
                </Col>
                <Col span={24}>
                    <Checkbox value="electronic">
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.button.paymentDetails.checkBox.electronic"
                            )}
                        </span>
                    </Checkbox>
                </Col>
                <Col span={24}>
                    <Checkbox value="paymentTerms">
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.button.paymentDetails.checkBox.wire"
                            )}
                        </span>
                    </Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
    );
};

export default CheckBox;
