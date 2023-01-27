import React from "react";
import { useTranslation } from "next-i18next";
import { Form, Input, Col, Row, Select } from "antd";
import { useFormik } from "formik";
import { HiOutlineChevronDown } from "react-icons/hi";
import styles from "@/styles/DashboardForm.module.css";
import { userInfoSchema } from "../../FormSchema";

const dropDown = <HiOutlineChevronDown className="text-black text-lg" />;

const MainForm = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            receiptRouting: "",
            noteSupplier: "",
            paymentsTerms: "",
            createdDate: "",
            freightTerms: "",
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
                                "dashboardForm.poManually.modal.mainForm.receiptRouting"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="receiptRouting"
                            className="form-control"
                            value={formik.values.receiptRouting}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.receiptRouting && (
                            <div className="text-red-800">
                                {formik.errors.receiptRouting}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.poManually.modal.mainForm.noteSupplier"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="noteSupplier"
                            className="form-control"
                            value={formik.values.noteSupplier}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.noteSupplier && (
                            <div className="text-red-800">
                                {formik.errors.noteSupplier}
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
                                "dashboardForm.poManually.modal.mainForm.paymentsTerms"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="paymentsTerms"
                            className="form-control"
                            value={formik.values.paymentsTerms}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.paymentsTerms && (
                            <div className="text-red-800">
                                {formik.errors.paymentsTerms}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.poManually.modal.mainForm.created"
                            )}
                        </span>
                        <div>
                            <Input
                                type="date"
                                name="createdDate"
                                className="form-control"
                                value={formik.values.createdDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.createdDate && (
                                <div className="text-red-800">
                                    {formik.errors.createdDate}
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
                                "dashboardForm.poManually.modal.mainForm.freightTerms"
                            )}
                        </span>
                        <div>
                            <Select
                                suffixIcon={dropDown}
                                value={formik.values.freightTerms}
                                onChange={(value: any) => {
                                    formik.setFieldValue("freightTerms", value);
                                }}
                                onBlur={formik.handleBlur}
                                onSelect={formik.handleChange}
                            />
                            {formik.errors.freightTerms && (
                                <div className="text-red-800">
                                    {formik.errors.freightTerms}
                                </div>
                            )}
                        </div>
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.poManually.modal.mainForm.warningDelay"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="warningDelay"
                            className="form-control"
                            value={formik.values.warningDelay}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.warningDelay && (
                            <div className="text-red-800">
                                {formik.errors.warningDelay}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default MainForm;
