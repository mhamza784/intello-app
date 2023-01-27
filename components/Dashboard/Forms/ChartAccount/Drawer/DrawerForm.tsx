import { useTranslation } from "next-i18next";
import React from "react";
import styles from "@/styles/ChartAccount.module.css";
import { Col, Form, Input, Row, Select, Checkbox } from "antd";
import { useFormik } from "formik";
import CheckBox from "./CheckBox";
import { userInfoSchema } from "../FormSchema";

const App: React.FC = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            mainAccount: "",
            accountDescription: "",
            accountType: "",
            accountCategory: "",
            defaultCurrency: "",
            userID: "",
            userGroup: "",
        },

        onSubmit: async () => null,
    });

    return (
        <Form
            layout="horizontal"
            hideRequiredMark
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            className={styles.drawerFormPadding}
            onFinish={formik.handleSubmit}
        >
            <div className="flex items-center text-center">
                <p className="flex text-base font-bold align-middle self-center ml-[43%]">
                    {translations("dashboardForm.chartAccount.newForm.title")}
                </p>
            </div>

            <Row gutter={[0, 8]} className="mb-6">
                <Col span={16}>
                    <Form.Item
                        name="mainAccount"
                        prefixCls="hide"
                        label={
                            <span className="font-semibold text-xs place-content-start justify-start">
                                {translations(
                                    "dashboardForm.chartAccount.newForm.mainAccount"
                                )}
                            </span>
                        }
                    >
                        <Input
                            type="string"
                            name="mainAccount"
                            value={formik.values.mainAccount}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.mainAccount && (
                            <div className="text-red-800">
                                {formik.errors.mainAccount}
                            </div>
                        )}
                    </Form.Item>
                </Col>

                <Col span={16}>
                    <Form.Item
                        name="accountDescription"
                        prefixCls="hide"
                        label={
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.chartAccount.newForm.accountDescription"
                                )}
                            </span>
                        }
                    >
                        <Input
                            type="string"
                            name="accountDescription"
                            value={formik.values.accountDescription}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.accountDescription && (
                            <div className="text-red-800">
                                {formik.errors.accountDescription}
                            </div>
                        )}
                    </Form.Item>
                </Col>

                <Col span={16}>
                    <Form.Item
                        name="accountType"
                        prefixCls="hide"
                        label={
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.chartAccount.newForm.accountType"
                                )}
                            </span>
                        }
                    >
                        <Select
                            value={formik.values.accountType}
                            onChange={(value: any) => {
                                formik.setFieldValue("accountType", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        />
                        {formik.errors.accountType && (
                            <div className="text-red-800">
                                {formik.errors.accountType}
                            </div>
                        )}
                    </Form.Item>
                </Col>

                <Col span={16}>
                    <Form.Item
                        name="type"
                        prefixCls="hide"
                        label={
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.chartAccount.newForm.accountCategory"
                                )}
                            </span>
                        }
                    >
                        <Select
                            value={formik.values.accountCategory}
                            onChange={(value: any) => {
                                formik.setFieldValue("accountCategory", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        />
                        {formik.errors.accountCategory && (
                            <div className="text-red-800">
                                {formik.errors.accountCategory}
                            </div>
                        )}
                    </Form.Item>
                </Col>

                <Col span={16}>
                    <Form.Item
                        name="defaultCurrency"
                        prefixCls="hide"
                        label={
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.chartAccount.newForm.defaultCurrency"
                                )}
                            </span>
                        }
                    >
                        <Select
                            value={formik.values.defaultCurrency}
                            onChange={(value: any) => {
                                formik.setFieldValue("defaultCurrency", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        />
                        {formik.errors.defaultCurrency && (
                            <div className="text-red-800">
                                {formik.errors.defaultCurrency}
                            </div>
                        )}
                    </Form.Item>
                </Col>
            </Row>

            <CheckBox />

            <div className="items-center text-center mt-8">
                <p className="flex text-base font-bold align-middle self-center ml-[38%]">
                    {translations(
                        "dashboardForm.chartAccount.newForm.PostingRestriction.title"
                    )}
                </p>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="userID"
                            label={
                                <span className="font-semibold text-xs ">
                                    {translations(
                                        "dashboardForm.chartAccount.newForm.PostingRestriction.userID"
                                    )}
                                </span>
                            }
                        >
                            <Select
                                value={formik.values.userID}
                                onChange={(value: any) => {
                                    formik.setFieldValue("userID", value);
                                }}
                                onBlur={formik.handleBlur}
                                onSelect={formik.handleChange}
                            />
                            {formik.errors.userID && (
                                <div className="text-red-800">
                                    {formik.errors.userID}
                                </div>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="type"
                            label={
                                <span className="font-semibold text-xs ">
                                    {translations(
                                        "dashboardForm.chartAccount.newForm.PostingRestriction.userGroup"
                                    )}
                                </span>
                            }
                        >
                            <Select
                                value={formik.values.userGroup}
                                onChange={(value: any) => {
                                    formik.setFieldValue("userGroup", value);
                                }}
                                onBlur={formik.handleBlur}
                                onSelect={formik.handleChange}
                            />
                            {formik.errors.userGroup && (
                                <div className="text-red-800">
                                    {formik.errors.userGroup}
                                </div>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
            </div>

            <div className=" mt-8  ">
                <p className="flex text-base font-bold align-middle self-center ml-[32%]">
                    {translations(
                        "dashboardForm.chartAccount.newForm.availableStructure.title"
                    )}
                </p>

                <div className="ml-[12%]">
                    <Checkbox value="relatedInvoices">
                        <span className="font-semibold  text-xs">
                            {translations(
                                "dashboardForm.chartAccount.newForm.availableStructure.checkBox"
                            )}
                        </span>
                    </Checkbox>
                </div>
            </div>
        </Form>
    );
};

export default App;
