import { useTranslation } from "next-i18next";
import { Form, Input, Col, Row, Select } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useFormik } from "formik";
import FormTable from "./Table/Table";
import Modal from "./Modal/ApprovalForm";
import { userInfoSchema } from "./FormSchema";

const dropDown = <HiOutlineChevronDown className="text-black text-lg" />;

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            number: "",
            creationDate: "",
            supplierName: "",
            expectedArrival: "",
            createdBy: "",
            status: "",
        },

        onSubmit: async () => null,
    });

    return (
        <Form
            size="middle"
            className={styles.poForm}
            autoComplete="off"
            onFinish={formik.handleSubmit}
        >
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.poManually.number")}
                        </span>
                        <Input
                            type="string"
                            name="number"
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.number && (
                            <div className="text-red-800">
                                {formik.errors.number}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.poManually.date")}
                        </span>
                        <div>
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
                        </div>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.poManually.supplier")}
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
                            {translations("dashboardForm.poManually.createdBy")}
                        </span>

                        <Select
                            suffixIcon={dropDown}
                            value={formik.values.createdBy}
                            onChange={(value: any) => {
                                formik.setFieldValue("createdBy", value);
                            }}
                            onBlur={formik.handleBlur}
                            onSelect={formik.handleChange}
                        />
                        {formik.errors.createdBy && (
                            <div className="text-red-800">
                                {formik.errors.createdBy}
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMarginT}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.poManually.status")}
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
                            {translations("dashboardForm.poManually.arrival")}
                        </span>
                        <div>
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
                        </div>
                    </Col>
                </Row>
            </Form.Item>
            <FormTable />
            <Form.Item>
                <span className=" flex font-semibold mt-2 justify-end">
                    <Modal />
                </span>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
