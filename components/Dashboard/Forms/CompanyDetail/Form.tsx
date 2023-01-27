import { useTranslation } from "next-i18next";
import React from "react";
import { Form, Input, Button, Col, Select, Row } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import { useFormik } from "formik";
import { userInfoSchema } from "./FormSchema";

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
            <Form.Item>
                <span className="font-semibold text-xs  ">
                    {translations("dashboardForm.form.company.title")}
                </span>
                <Input
                    type="companyName"
                    name="companyName"
                    className="form-control"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.email && (
                    <div className="text-red-800">
                        {formik.errors.companyName}
                    </div>
                )}
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={24}>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.form.email.title")}
                        </span>
                        <Input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && (
                            <div className="text-red-800">
                                {formik.errors.email}
                            </div>
                        )}
                    </Col>
                    <Col span={3}>
                        <span className="font-semibold text-xs w-60 md:w-auto ">
                            {translations("dashboardForm.form.Contact.title")}
                        </span>

                        <Select
                            value={formik.values.contactCode}
                            onChange={(value: any) => {
                                formik.setFieldValue("contactCode", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        >
                            <Select.Option value="code">
                                <span className="p-1 text-xs ">
                                    {translations(
                                        "dashboardForm.form.Contact.code1"
                                    )}
                                </span>
                            </Select.Option>
                        </Select>
                        {formik.errors.contactCode && (
                            <div className="text-red-800">
                                {formik.errors.contactCode}
                            </div>
                        )}
                    </Col>
                    <Col span={9}>
                        <span className="font-semibold text-xs w-60 md:w-auto ">
                            {translations("dashboardForm.form.No.title")}
                        </span>
                        <Input
                            type="string"
                            name="contactNo"
                            value={formik.values.contactNo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.contactNo && (
                            <div className="text-red-800">
                                {formik.errors.contactNo}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <span className="font-semibold text-xs">
                    {translations("dashboardForm.form.address")}
                </span>
                <Input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.address && (
                    <div className="text-red-800">{formik.errors.address}</div>
                )}
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={24}>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.form.country.title")}
                        </span>
                        <Select
                            value={formik.values.country}
                            onChange={(value: any) => {
                                formik.setFieldValue("country", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        >
                            <Select.Option value="United State">
                                <span className="p-1 text-xs ">
                                    {translations(
                                        "dashboardForm.form.country.item1"
                                    )}
                                </span>
                            </Select.Option>
                        </Select>
                        {formik.errors.country && (
                            <div className="text-red-800">
                                {formik.errors.country}
                            </div>
                        )}
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.form.city.title")}{" "}
                        </span>

                        <Select
                            value={formik.values.city}
                            onChange={(value: any) => {
                                formik.setFieldValue("city", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        >
                            <Select.Option value="california">
                                <span className="p-1 text-xs ">
                                    {translations(
                                        "dashboardForm.form.city.city1"
                                    )}
                                </span>
                            </Select.Option>
                        </Select>
                        {formik.errors.city && (
                            <div className="text-red-800">
                                {formik.errors.city}
                            </div>
                        )}
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.form.postalCode.title"
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
                            {translations("dashboardForm.form.industry.title")}
                        </span>
                        <Select
                            value={formik.values.industryType}
                            onChange={(value: any) => {
                                formik.setFieldValue("industryType", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        >
                            <Select.Option value="demo">
                                <span className="p-1 text-xs ">
                                    {translations(
                                        "dashboardForm.form.industry.type1"
                                    )}
                                </span>
                            </Select.Option>
                        </Select>
                        {formik.errors.industryType && (
                            <div className="text-red-800">
                                {formik.errors.industryType}
                            </div>
                        )}
                    </Col>
                    <Col span={8}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.form.founded.title")}
                        </span>

                        <Input
                            type="month"
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
                            {translations("dashboardForm.form.Website.title")}{" "}
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
            <Form.Item>
                <span className="gap-2 flex -order-last justify-end">
                    <Button className={styles.button}>
                        {translations("dashboardForm.form.button.btn1")}
                    </Button>
                    <Button className={styles.button1} htmlType="submit">
                        {translations("dashboardForm.form.button.btn2")}
                    </Button>
                </span>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
