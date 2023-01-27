import { useTranslation } from "next-i18next";
import { Button } from "antd";
import styles from "@/styles/DashboardForm.module.css";

export default () => {
    const { t: translations } = useTranslation();
    return (
        <span className="gap-3 flex -order-first">
            <Button className={styles.ChargesReceivedBtn}>
                {translations(
                    "dashboardForm.purchaseOrder.chargesAllocation.button.add"
                )}
            </Button>
            <Button className={styles.ChargesReceivedBtn}>
                {translations(
                    "dashboardForm.purchaseOrder.chargesAllocation.button.edit"
                )}
            </Button>
            <Button className={styles.ChargesReceivedBtn}>
                {translations(
                    "dashboardForm.purchaseOrder.chargesAllocation.button.allocated"
                )}
            </Button>
            <Button className={styles.ChargesReceivedBtn}>
                {translations(
                    "dashboardForm.purchaseOrder.chargesAllocation.button.delete"
                )}
            </Button>
            <Button className={styles.ChargesReceivedBtn}>
                {translations(
                    "dashboardForm.purchaseOrder.chargesAllocation.button.save"
                )}
            </Button>
        </span>
    );
};
