import { useTranslation } from "next-i18next";
import { Form, Button } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import FormTable from "./Table/Table";

const DashboardForm = () => {
    const { t: translations } = useTranslation();

    return (
        <Form size="middle" className={styles.poForm} autoComplete="off">
            <div className="w-[65%]">
                <FormTable />
            </div>
            <Form.Item>
                <span className="gap-2 flex -order-first justify-end mt-4 mr-[35%]">
                    <Button className={styles.buttonSave}>
                        {translations("dashboardForm.user.button.newBtn")}
                    </Button>
                    <Button className={styles.buttonSave} htmlType="submit">
                        {translations("dashboardForm.user.button.save")}
                    </Button>
                </span>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
