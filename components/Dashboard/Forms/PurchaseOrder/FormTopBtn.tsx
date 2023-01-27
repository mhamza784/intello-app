import { useTranslation } from "next-i18next";
import { Button } from "antd";
import styles from "@/styles/DashboardForm.module.css";
import ApprovalStatus from "./Modal/ApprovalStatus";
import PrePayments from "./Modal/PrePayments";
import ProductReceived from "./Modal/ProductReceipt";

export default () => {
    const { t: translations } = useTranslation();
    return (
        <span className="gap-3 flex -order-first">
            <ApprovalStatus />
            <Button className={styles.button11}>
                {translations(
                    "dashboardForm.purchaseOrder.button.submitApproval"
                )}
            </Button>

            <ProductReceived />

            <Button className={styles.productReceivedBtn}>
                {translations(
                    "dashboardForm.purchaseOrder.button.viewProductReceived"
                )}
            </Button>

            <Button className={styles.button11}>
                {translations(
                    "dashboardForm.purchaseOrder.button.createInvoice"
                )}
            </Button>

            <Button className={styles.button11}>
                {translations(
                    "dashboardForm.purchaseOrder.button.viewInvoiced"
                )}
            </Button>

            <PrePayments />

            <Button className={styles.button11}>
                {translations(
                    "dashboardForm.purchaseOrder.button.viewPrepayment"
                )}
            </Button>
            <Button className={styles.button11}>
                {translations("dashboardForm.purchaseOrder.button.save")}
            </Button>
        </span>
    );
};
