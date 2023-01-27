import { useTranslation } from "next-i18next";
import { Form, Input, Button, Col, Row, Select } from "antd";
import styles from "@/styles/PurchaseInvoice.module.css";
import { useFormik } from "formik";
import { HiOutlineChevronDown } from "react-icons/hi";
import FormTable from "./Table/Table";
import Discount from "./Modal/Discount";
import FinancialDimension from "./Modal/FinancialDimension";
import { userInfoSchema } from "./FormSchema";
import FormTopBtn from "./FormTopBtn";

const dropDown = <HiOutlineChevronDown className="text-black text-lg" />;

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            type: "",
            invoiceDate: "",
            supplierName: "",
            POnumber: "",
            invoiceCurrency: "",
            invoiceNumber: "",
            paymentTerms: "",
            postingDate: "",
        },

        onSubmit: async () => null,
    });

    return (
        <Form size="middle" className={styles.poForm}>
            <Form.Item>
                <FormTopBtn />
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.purchaseInvoice.type")}
                        </span>
                        <Input
                            type="string"
                            name="type"
                            className="form-control"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.type && (
                            <div className="text-red-800">
                                {formik.errors.type}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.purchaseInvoice.date")}
                        </span>
                        <div>
                            <Input
                                type="date"
                                name="invoiceDate"
                                className="form-control"
                                value={formik.values.invoiceDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.invoiceDate && (
                                <div className="text-red-800">
                                    {formik.errors.invoiceDate}
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
                            {translations(
                                "dashboardForm.purchaseInvoice.poNum"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="POnumber"
                            className="form-control"
                            value={formik.values.POnumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.POnumber && (
                            <div className="text-red-800">
                                {formik.errors.POnumber}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseInvoice.invoiceCurrency"
                            )}
                        </span>

                        <Select
                            suffixIcon={dropDown}
                            value={formik.values.invoiceCurrency}
                            onChange={(value: any) => {
                                formik.setFieldValue("invoiceCurrency", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        />
                        {formik.errors.invoiceCurrency && (
                            <div className="text-red-800">
                                {formik.errors.invoiceCurrency}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseInvoice.invoiceNum"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="invoiceNumber"
                            className="form-control"
                            value={formik.values.invoiceNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.invoiceNumber && (
                            <div className="text-red-800">
                                {formik.errors.invoiceNumber}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseInvoice.paymentTerms"
                            )}
                        </span>
                        <div>
                            <Select
                                suffixIcon={dropDown}
                                value={formik.values.paymentTerms}
                                onChange={(value: any) => {
                                    formik.setFieldValue("paymentTerms", value);
                                }}
                                onBlur={formik.handleBlur}
                                onSelect={formik.handleChange}
                            />
                            {formik.errors.paymentTerms && (
                                <div className="text-red-800">
                                    {formik.errors.paymentTerms}
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
                            {translations(
                                "dashboardForm.purchaseInvoice.supplierName"
                            )}
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
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseInvoice.postingDate"
                            )}
                        </span>
                        <Input
                            type="date"
                            name="postingDate"
                            className="form-control"
                            value={formik.values.postingDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.supplierName && (
                            <div className="text-red-800">
                                {formik.errors.postingDate}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <div className="gap-3 flex ">
                    <Button className={styles.largeBtn}>
                        {translations(
                            "dashboardForm.purchaseInvoice.formButton.addCharges"
                        )}
                    </Button>

                    <Button className={styles.largeBtn}>
                        {translations(
                            "dashboardForm.purchaseInvoice.formButton.removeLine"
                        )}
                    </Button>
                </div>
            </Form.Item>
            <FormTable />
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseInvoice.untaxedAmount"
                            )}
                        </span>
                        <Input />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.purchaseInvoice.tax")}
                        </span>
                        <div>
                            <Input />
                        </div>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseInvoice.total"
                            )}
                        </span>
                        <Input />
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseInvoice.discount"
                            )}
                        </span>
                        <div>
                            <Input />
                        </div>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseInvoice.netAmountPayable"
                            )}
                        </span>
                        <Input />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <span className="gap-2 flex font-semibold justify-end">
                    <FinancialDimension />
                    <Discount />
                </span>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
