import { useTranslation } from "next-i18next";
import { Checkbox, Row, Col } from "antd";

const CheckBox = () => {
    const { t: translations } = useTranslation();

    return (
        <Checkbox.Group>
            <Row gutter={[24, 4]}>
                <Col span={24}>
                    <Checkbox value="validate">
                        <span className="font-normal text-base ">
                            {translations(
                                "dashboardForm.moduleSetup.checkBox.requisition"
                            )}
                        </span>
                    </Checkbox>
                </Col>
                <Col span={24}>
                    <Checkbox value="relatedInvoices">
                        <span className="font-normal text-base ">
                            {translations(
                                "dashboardForm.moduleSetup.checkBox.PO"
                            )}
                        </span>
                    </Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
    );
};

export default CheckBox;
