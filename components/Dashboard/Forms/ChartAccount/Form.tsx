import { useTranslation } from "next-i18next";
import { Form, Button, Input } from "antd";
import styles from "@/styles/ChartAccount.module.css";
import { useFormik } from "formik";
import FormTable from "./Table/Table";
import { userInfoSchema } from "./FormSchema";
import NewBtn from "./Drawer/Drawer";

const { Search } = Input;
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
            <Form.Item>
                <span className="gap-6 flex -order-first">
                    <NewBtn />

                    <Button className={styles.button1}>
                        {translations(
                            "dashboardForm.chartAccount.btn.deleteBtn"
                        )}
                    </Button>

                    <Button className={styles.button1} htmlType="submit">
                        {translations("dashboardForm.chartAccount.btn.editBtn")}
                    </Button>

                    <Button className={styles.button1} htmlType="submit">
                        {translations(
                            "dashboardForm.chartAccount.btn.transactionBtn"
                        )}
                    </Button>
                </span>
            </Form.Item>

            <Form.Item>
                <span className="gap-2 flex w-32 flex justify-end">
                    <Search />
                </span>
            </Form.Item>

            <div className="w-[50%]">
                <FormTable />
            </div>
        </Form>
    );
};

export default DashboardForm;
