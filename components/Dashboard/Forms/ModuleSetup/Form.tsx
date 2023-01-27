import { useTranslation } from "next-i18next";
import { Form, Input, Button, Col, Row } from "antd";
import styles from "@/styles/ModuleSetupForm.module.css";
import CheckBox from "./CheckBox";

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    return (
        <Form size="middle" className={styles.paddingForm}>
            <Form.Item>
                <span className="flex gap-2 font-semibold justify-start">
                    <Button className={styles.AccountingBtn}>
                        <p className="font-semibold text-sm self-center ">
                            {translations(
                                "dashboardForm.moduleSetup.formBtn.accounting"
                            )}
                        </p>
                    </Button>
                    <Button className={styles.ApprovalBtn}>
                        <p className="font-semibold text-sm self-center ">
                            {translations(
                                "dashboardForm.moduleSetup.formBtn.approval"
                            )}
                        </p>
                    </Button>
                </span>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.moduleSetup.expenseAccrual"
                            )}
                        </span>
                        <Input />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.moduleSetup.liability"
                            )}
                        </span>
                        <Input />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.moduleSetup.prepayment"
                            )}
                        </span>
                        <Input />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.moduleSetup.billsPayable"
                            )}
                        </span>
                        <Input />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.moduleSetup.rateGainer"
                            )}
                        </span>
                        <Input />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.moduleSetup.rateLoss")}
                        </span>
                        <Input />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.moduleSetup.inventory"
                            )}
                        </span>
                        <Input />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <CheckBox />
            </Form.Item>
            <Form.Item>
                <span className="flex font-semibold justify-start">
                    <Button className={styles.AccountingBtn}>
                        <p className="font-semibold text-base self-center ">
                            {translations(
                                "dashboardForm.moduleSetup.formBtn.document"
                            )}
                        </p>
                    </Button>
                </span>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
