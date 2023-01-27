import { useTranslation } from "next-i18next";
import { Form, Input, Col, Select, Row, Button } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import { useFormik } from "formik";
import FormTable from "./Table/Table";
import { userInfoSchema } from "./MySchema";
import PurchaseBtn from "./Modal/PurchaseHistory";
import QTYStatus from "./Modal/QTYstatus";
import FormTopBtn from "./FormTopBtn";
import ChargesAllocation from "./Modal/ChargesAllocation";

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            companyNumber: "",
            supplier: "",
            status: "",
            paymentTerms: "",
            shipTo: "",
            creationDate: "",
            createdBy: "",
            expectedArrival: "",
            paymentMethod: "",
            billTo: "",
        },
        onSubmit: async () => null,
    });

    return (
        <Form
            size="middle"
            className={styles.form}
            onFinish={formik.handleSubmit}
        >
            <Form.Item>
                <FormTopBtn />
            </Form.Item>
            <Form.Item>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseOrder.poNumber"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="companyNumber"
                            className="form-control"
                            value={formik.values.companyNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.companyNumber && (
                            <div className="text-red-800">
                                {formik.errors.companyNumber}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.purchaseOrder.supplier"
                            )}
                        </span>
                        <Select
                            value={formik.values.supplier}
                            onChange={(value: any) => {
                                formik.setFieldValue("supplier", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        />
                        {formik.errors.supplier && (
                            <div className="text-red-800">
                                {formik.errors.supplier}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.purchaseOrder.status")}
                        </span>
                        <Input
                            type="string"
                            name="status"
                            className="form-control"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.status && (
                            <div className="text-red-800">
                                {formik.errors.status}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseOrder.paymentTerms"
                            )}
                        </span>

                        <Input
                            type="string"
                            name="paymentTerms"
                            className="form-control"
                            value={formik.values.paymentTerms}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.paymentTerms && (
                            <div className="text-red-800">
                                {formik.errors.paymentTerms}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.purchaseOrder.shipTo")}
                        </span>
                        <Input
                            type="string"
                            name="shipTo"
                            className="form-control"
                            value={formik.values.shipTo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.shipTo && (
                            <div className="text-red-800">
                                {formik.errors.shipTo}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseOrder.creationDate"
                            )}
                        </span>

                        <Input
                            type="date"
                            name="creationDate"
                            className="form-control"
                            value={formik.values.creationDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.creationDate && (
                            <div className="text-red-800">
                                {formik.errors.creationDate}
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
                                "dashboardForm.purchaseOrder.createdBy"
                            )}
                        </span>
                        <Select
                            value={formik.values.createdBy}
                            onChange={(value: any) => {
                                formik.setFieldValue("createdBy", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        />
                        {formik.errors.status && (
                            <div className="text-red-800">
                                {formik.errors.status}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations(
                                "dashboardForm.purchaseOrder.expectedArrival"
                            )}
                        </span>

                        <Input
                            type="date"
                            name="expectedArrival"
                            className="form-control"
                            value={formik.values.expectedArrival}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.expectedArrival && (
                            <div className="text-red-800">
                                {formik.errors.expectedArrival}
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
                                "dashboardForm.purchaseOrder.paymentMethod"
                            )}
                        </span>
                        <Input
                            type="string"
                            name="paymentMethod"
                            className="form-control"
                            value={formik.values.paymentMethod}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.paymentMethod && (
                            <div className="text-red-800">
                                {formik.errors.paymentMethod}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.purchaseOrder.billTo")}
                        </span>
                        <Input
                            type="string"
                            name="billTo"
                            className="form-control"
                            value={formik.values.billTo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.billTo && (
                            <div className="text-red-800">
                                {formik.errors.billTo}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <span className="gap-2 flex">
                    <Button className={styles.button11}>
                        {translations(
                            "dashboardForm.purchaseOrder.button.addLine"
                        )}
                    </Button>
                    <ChargesAllocation />
                </span>
            </Form.Item>
            <FormTable />
            <Form.Item>
                <div className="flex w-full justify-between mt-2">
                    <span className="gap-2 flex  font-semibold  justify-start">
                        <PurchaseBtn />
                        <QTYStatus />
                    </span>
                </div>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
