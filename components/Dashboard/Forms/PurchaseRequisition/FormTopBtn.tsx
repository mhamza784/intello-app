import { useTranslation } from "next-i18next";
import { Button } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import ApprovalStatus from "./Modal/ApprovalStatus/ApprovalStatus";

export default () => {
    const { t: translations } = useTranslation();
    return (
        <span className="gap-3 flex -order-first flex-wrap">
            <ApprovalStatus />
            <Button className={styles.button11}>
                {translations(
                    "dashboardForm.purchaseForm.button.submitApproval"
                )}
            </Button>

            <Button className={styles.button11}>
                {translations(
                    "dashboardForm.purchaseForm.button.sendRequisition"
                )}
            </Button>

            <Button className={styles.button11}>
                {translations("dashboardForm.purchaseForm.button.viewDetail")}
            </Button>

            <Button className={styles.button11}>
                {translations("dashboardForm.purchaseForm.button.createPO")}
            </Button>

            <Button className={styles.button11}>
                {translations("dashboardForm.purchaseForm.button.closePR")}
            </Button>

            <Button className={styles.button11}>
                {translations("dashboardForm.purchaseForm.button.print")}
            </Button>

            <Button className={styles.button11} htmlType="submit">
                {translations("dashboardForm.purchaseForm.button.save")}
            </Button>
        </span>
    );
};
