import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Form, Input, Col, Row } from "antd";
import { useFormik } from "formik";
import styles from "@/styles/DashboardForm.module.css";
import RadioBtn from "./RadioButton";
import { userInfoSchema } from "../MySchema";

const { TextArea } = Input;

const ModalForm = () => {
    const [value, setValue] = useState("");

    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            forwardFrom: "",
            forwardTo: "",
        },
        onSubmit: async () => null,
    });

    return (
        <Form size="middle" autoComplete="off" onFinish={formik.handleSubmit}>
            <Form.Item className={styles.inputMargin}>
                <RadioBtn />
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.quoteAnalysis.modal.forwardFrom"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="forwardFrom"
                            className="form-control"
                            value={formik.values.forwardFrom}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.forwardFrom && (
                            <div className="text-red-800">
                                {formik.errors.forwardFrom}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.quoteAnalysis.modal.forwardTo"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="forwardTo"
                            className="form-control"
                            value={formik.values.forwardTo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.forwardTo && (
                            <div className="text-red-800">
                                {formik.errors.forwardTo}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <span className="font-semibold text-xs  ">
                    {translations("dashboardForm.quoteAnalysis.modal.note")}
                </span>
                <TextArea
                    className={styles.QuoteAnalysisModalBg}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
            </Form.Item>
        </Form>
    );
};

export default ModalForm;
