import React from "react";
import { useTranslation } from "next-i18next";
import { Form, Input, Col, Row, Select } from "antd";
import { useFormik } from "formik";
import { HiOutlineChevronDown } from "react-icons/hi";
import styles from "@/styles/DashboardForm.module.css";
import { userInfoSchema } from "../../FormSchema";

const dropDown = <HiOutlineChevronDown className="text-black text-lg" />;

const ReceivingForm = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            daysEarly: "",
            tolerance: "",
            daysLate: "",
            action: "",
            Action: "",
            warningDelay: "",
        },

        onSubmit: async () => null,
    });

    return (
        <Form size="middle">
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.poManually.modal.receivingForm.daysEarly"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="daysEarly"
                            className="form-control"
                            value={formik.values.daysEarly}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.daysEarly && (
                            <div className="text-red-800">
                                {formik.errors.daysEarly}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.poManually.modal.receivingForm.tolerance"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="tolerance"
                            className="form-control"
                            value={formik.values.tolerance}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.tolerance && (
                            <div className="text-red-800">
                                {formik.errors.tolerance}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.poManually.modal.receivingForm.daysLate"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="daysLate"
                            className="form-control"
                            value={formik.values.daysLate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.daysLate && (
                            <div className="text-red-800">
                                {formik.errors.daysLate}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.poManually.modal.receivingForm.action"
                            )}
                        </span>
                        <div>
                            <Select
                                suffixIcon={dropDown}
                                value={formik.values.action}
                                onChange={(value: any) => {
                                    formik.setFieldValue("action", value);
                                }}
                                onBlur={formik.handleBlur}
                                onSelect={formik.handleChange}
                            />
                            {formik.errors.action && (
                                <div className="text-red-800">
                                    {formik.errors.action}
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.poManually.modal.receivingForm.action"
                            )}
                        </span>
                        <div>
                            <Select
                                suffixIcon={dropDown}
                                value={formik.values.Action}
                                onChange={(value: any) => {
                                    formik.setFieldValue("Action", value);
                                }}
                                onBlur={formik.handleBlur}
                                onSelect={formik.handleChange}
                            />
                            {formik.errors.Action && (
                                <div className="text-red-800">
                                    {formik.errors.Action}
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default ReceivingForm;
