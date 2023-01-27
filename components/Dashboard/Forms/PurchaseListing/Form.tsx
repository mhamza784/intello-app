import { useTranslation } from "next-i18next";
import { Form, Button } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import FormTable from "./Table/Table";

const PRListing = () => {
    const { t: translations } = useTranslation();

    return (
        <Form size="middle" className={styles.poForm} autoComplete="off">
            <div className="">
                <FormTable />
            </div>
            <Form.Item>
                <span className="gap-2 flex -order-first justify-end mt-6">
                    <Button className={styles.button1}>
                        {translations(
                            "dashboardForm.prListing.button.viewDetail"
                        )}
                    </Button>
                    <Button className={styles.button1}>
                        {translations("dashboardForm.prListing.button.newBtn")}
                    </Button>
                    <Button className={styles.button1} htmlType="submit">
                        {translations("dashboardForm.prListing.button.save")}
                    </Button>
                </span>
            </Form.Item>
        </Form>
    );
};

export default PRListing;
