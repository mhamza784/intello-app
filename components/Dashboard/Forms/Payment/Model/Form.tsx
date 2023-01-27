import { useTranslation } from "next-i18next";
import { Form, Input, Button, Col, Row } from "antd";
import styles from "@/styles/PaymentForm.module.css";
import { useFormik } from "formik";
import RadioBtn from "./RadioButton";
import { userInfoSchema } from "./FormSchema";
import AdjustInvoice from "./AdjustInvoices/Index";
import FindBtn from "./Find/Index";

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            supplierName: "",
            bankAccount: "",
            supplierNum: "",
            paymentDate: "",
            documentNo: "",
            invoiceNumber: "",
            SupplierName: "",
            postingDate: "",
        },

        onSubmit: async () => null,
    });

    return (
        <Form size="middle" className={styles.poForm}>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.payment.supplier")}
                        </span>
                        <Input
                            type="string"
                            name="supplierName"
                            className="form-control"
                            value={formik.values.supplierName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.supplierName && (
                            <div className="text-red-800">
                                {formik.errors.supplierName}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.payment.bankAccount")}
                        </span>
                        <Input
                            type="string"
                            name="bankAccount"
                            className="form-control"
                            value={formik.values.bankAccount}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.bankAccount && (
                            <div className="text-red-800">
                                {formik.errors.bankAccount}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.payment.supplierNum")}
                        </span>
                        <Input
                            type="string"
                            name="supplierNum"
                            className="form-control"
                            value={formik.values.supplierNum}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.supplierNum && (
                            <div className="text-red-800">
                                {formik.errors.supplierNum}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.payment.paymentDate")}
                        </span>
                        <div>
                            <Input
                                type="date"
                                name="paymentDate"
                                className="form-control"
                                value={formik.values.paymentDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.paymentDate && (
                                <div className="text-red-800">
                                    {formik.errors.paymentDate}
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.payment.documentNo")}
                        </span>
                        <Input
                            type="string"
                            name="documentNo"
                            className="form-control"
                            value={formik.values.documentNo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.documentNo && (
                            <div className="text-red-800">
                                {formik.errors.documentNo}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.payment.postingDate")}
                        </span>
                        <Input
                            type="date"
                            name="postingDate"
                            className="form-control"
                            value={formik.values.postingDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.postingDate && (
                            <div className="text-red-800">
                                {formik.errors.postingDate}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.payment.paymentMode")}
                        </span>
                        <div className="flex">
                            <RadioBtn />
                            <span className="flex font-semibold mx-6 justify-start">
                                <Button className={styles.paymentEnterBtn}>
                                    <p className="font-semibold text-base self-center ">
                                        {translations(
                                            "dashboardForm.payment.formBtn.enter"
                                        )}
                                    </p>
                                </Button>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <div className="flex gap-4 mt-5">
                    <AdjustInvoice />
                    <FindBtn />
                </div>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
