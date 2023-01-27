import { useTranslation } from "next-i18next";
import { Form, Input, Button, Col, Row } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useFormik } from "formik";
import FormTable from "./Table/Table";
import { userInfoSchema } from "./MySchema";

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
            prNumber: "",
            supplierName: "",
        },
        onSubmit: async () => null,
    });

    return (
        <Form
            size="middle"
            className={styles.dashboardForm}
            onFinish={formik.handleSubmit}
        >
            <Form.Item className={styles.inputMargin}>
                <Row gutter={[24, 4]}>
                    <Col span={12}>
                        <span className="font-semibold text-xs  ">
                            {translations("dashboardForm.rfqForm.prNumber")}
                        </span>
                        <Input
                            type="string"
                            name="prNumber"
                            className="form-control"
                            value={formik.values.prNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.prNumber && (
                            <div className="text-red-800">
                                {formik.errors.prNumber}
                            </div>
                        )}
                    </Col>
                    <Col span={12}>
                        <span className="font-semibold text-xs ">
                            {translations("dashboardForm.rfqForm.supplierName")}
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
                        <div className="flex py-0  text-center">
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
                <span className="flex justify-end mt-2">
                    <Button className={styles.PurchaseFormAddBtn}>
                        <div className="flex ">
                            <p className="font-semibold text-base  pr-4 self-end  ">
                                {translations("dashboardForm.rfqForm.add")}
                            </p>
                            <AiOutlinePlus className="bg-white text-black rounded-full text-xl p-1" />
                        </div>
                    </Button>
                </span>
            </Form.Item>
            <Form.Item className={styles.inputMargin}>
                <span className="gap-2 mt-[-2.5rem]  flex font-semibold  justify-start">
                    <Button className={styles.FrqFormBtn}>
                        <p className="font-semibold text-base self-center ">
                            {translations("dashboardForm.rfqForm.btnRfq")}
                        </p>
                    </Button>
                </span>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
