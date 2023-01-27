import { useTranslation } from "next-i18next";
import { Form, Input, Button, Col, Row } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import { CiSearch } from "react-icons/ci";
import { useFormik } from "formik";
import FormTable from "./Table/Table";
import { userInfoSchema } from "./MySchema";
import Modal from "./Modal/ApprovalForm";

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
            className={styles.dashboardForm}
            autoComplete="off"
            onFinish={formik.handleSubmit}
        >
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations(
                                "dashboardForm.quoteAnalysis.RFQNumber"
                            )}
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
                            {translations(
                                "dashboardForm.quoteAnalysis.supplierName"
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
                </Row>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <span className="flex justify-end">
                    <Button className={styles.formSearchBar}>
                        <div className="flex text-center">
                            <p className=" flex font-normal pr-4 text-base self-start  ">
                                {translations(
                                    "dashboardForm.rfqForm.searchBar"
                                )}
                            </p>
                            <CiSearch className="bg-white text-black rounded-sm text-xl my-1 py-1 p-[.10rem ]" />
                        </div>
                    </Button>
                </span>
            </Form.Item>
            <FormTable />
            <Form.Item className={styles.inputMargin}>
                <span className="flex font-semibold  justify-end">
                    <Modal />
                </span>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
