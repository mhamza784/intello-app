import { useTranslation } from "next-i18next";
import React from "react";
import { Form, Input, Col, Select, Row, Checkbox } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import { useFormik } from "formik";
import { userInfoSchema } from "./FormSchema";
import RadioBtn from "./RadioButton";
import CheckBx from "./CheckBox";
import Tabs from "./Tabs/Tabs";

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            companyName: "",
            email: "",
            contactCode: "",
            contactNo: "",
            address: "",
            country: "",
            city: "",
            postalCode: "",
            industryType: "",
            yearFounded: "",
            website: "",
        },

        onSubmit: async () => null,
    });

    return (
        <Form
            size="middle"
            className={styles.form}
            autoComplete="off"
            onFinish={formik.handleSubmit}
        >
            <div className="font-semibold text-sm pb-3 ">
                {translations("dashboardForm.createSupplier.basic")}
            </div>
            <div className="flex w-full justify-between pb-6">
                <RadioBtn />
                <div className="justify-end">
                    <Checkbox>
                        {translations(
                            "dashboardForm.createSupplier.checkBox.allowTex"
                        )}
                    </Checkbox>
                </div>
            </div>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={24}>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.formField.name"
                            )}
                        </span>
                        <Input />
                        {formik.errors.country && (
                            <div className="text-red-800">
                                {formik.errors.country}
                            </div>
                        )}
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.formField.supplierNumber"
                            )}
                        </span>

                        <Input />
                        {formik.errors.city && (
                            <div className="text-red-800">
                                {formik.errors.city}
                            </div>
                        )}
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.formField.website"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="postalCode"
                            className="form-control"
                            value={formik.values.postalCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.postalCode && (
                            <div className="text-red-800">
                                {formik.errors.postalCode}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={24}>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.formField.country"
                            )}
                        </span>
                        <Select />
                        {formik.errors.industryType && (
                            <div className="text-red-800">
                                {formik.errors.industryType}
                            </div>
                        )}
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.formField.industry"
                            )}
                        </span>

                        <Select />
                        {formik.errors.yearFounded && (
                            <div className="text-red-800">
                                {formik.errors.yearFounded}
                            </div>
                        )}
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.formField.inactiveDate"
                            )}
                        </span>
                        <Input
                            type="website"
                            name="website"
                            className="form-control"
                            value={formik.values.website}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.website && (
                            <div className="text-red-800">
                                {formik.errors.website}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={24}>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.formField.taxRegistration"
                            )}
                        </span>
                        <Select />
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.formField.status"
                            )}
                        </span>

                        <Input
                            type="date"
                            name="yearFounded"
                            className="form-control"
                            value={formik.values.yearFounded}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.yearFounded && (
                            <div className="text-red-800">
                                {formik.errors.yearFounded}
                            </div>
                        )}
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.createSupplier.formField.dateEstablished"
                            )}
                        </span>
                        <Input
                            type="date"
                            name="website"
                            className="form-control"
                            value={formik.values.website}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.website && (
                            <div className="text-red-800">
                                {formik.errors.website}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <div className="flex w-full justify-between pb-6">
                <div className="block">
                    <div className="font-semibold text-sm pb-3 ">
                        {translations(
                            "dashboardForm.createSupplier.checkBox.title"
                        )}
                    </div>
                    <div>
                        <Checkbox>
                            {translations(
                                "dashboardForm.createSupplier.checkBox.allInvoices"
                            )}
                        </Checkbox>
                    </div>
                </div>
                <div className="justify-end">
                    <CheckBx />
                </div>
            </div>
            <Tabs />
        </Form>
    );
};

export default DashboardForm;
