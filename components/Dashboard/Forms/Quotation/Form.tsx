import { useTranslation } from "next-i18next";
import { Form, Input, Button, Col, Row, Select } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import { useFormik } from "formik";
import FormTable from "./Table/Table";
import { userInfoSchema } from "./MySchema";

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            RFQNumber: "",
            creationDate: "",
            dueDate: "",
            status: "",
            description: "",
            currency: "",
            supplierName: "",
        },
        onSubmit: async () => null,
    });

    return (
        <Form
            size="middle"
            className={styles.form}
            onFinish={formik.handleSubmit}
        >
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.rfq.number")}
                        </span>
                        <Input
                            type="string"
                            name="RFQNumber"
                            className="form-control"
                            value={formik.values.RFQNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.RFQNumber && (
                            <div className="text-red-800">
                                {formik.errors.RFQNumber}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.rfq.creationDate")}
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
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.rfq.dueDate")}
                        </span>
                        <Input
                            type="date"
                            name="dueDate"
                            className="form-control"
                            value={formik.values.dueDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.dueDate && (
                            <div className="text-red-800">
                                {formik.errors.dueDate}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.rfq.status")}
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
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.rfq.description")}
                        </span>
                        <Input
                            type="string"
                            name="description"
                            className="form-control"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.description && (
                            <div className="text-red-800">
                                {formik.errors.description}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.rfq.currency")}
                        </span>
                        <Select
                            value={formik.values.currency}
                            onChange={(value: any) => {
                                formik.setFieldValue("currency", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        />
                        {formik.errors.currency && (
                            <div className="text-red-800">
                                {formik.errors.currency}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.rfq.supplierName")}
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
                </Row>
            </Form.Item>
            <FormTable />
            <Form.Item>
                <span className="gap-2  flex font-semibold justify-end">
                    <Button
                        className={styles.PurchaseFormBtn}
                        htmlType="submit"
                    >
                        <p className="font-semibold text-base self-center ">
                            {translations("dashboardForm.rfq.buttonForm.save")}
                        </p>
                    </Button>
                </span>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
