import { useTranslation } from "next-i18next";
import { Button } from "antd";
import styles from "@/styles/PurchaseInvoice.module.css";
import ApplyPrepayment from "./Modal/ApplyPrepayment";

export default () => {
    const { t: translations } = useTranslation();
    return (
        <span className="gap-3 flex -order-first">
            <Button className={styles.largeBtn}>
                {translations(
                    "dashboardForm.purchaseInvoice.formButton.viewJournal"
                )}
            </Button>

            <Button className={styles.largeBtn}>
                {translations(
                    "dashboardForm.purchaseInvoice.formButton.submitForApproval"
                )}
            </Button>

            <Button className={styles.largeBtn}>
                {translations(
                    "dashboardForm.purchaseInvoice.formButton.viewApprovalStatus"
                )}
            </Button>

            <ApplyPrepayment />

            <Button className={styles.largeBtn}>
                {translations(
                    "dashboardForm.purchaseInvoice.formButton.createPayment"
                )}
            </Button>

            <Button className={styles.largeBtn}>
                {translations(
                    "dashboardForm.purchaseInvoice.formButton.viewPayment"
                )}
            </Button>

            <Button className={styles.largeBtn}>
                {translations("dashboardForm.purchaseInvoice.formButton.post")}
            </Button>
            <Button className={styles.largeBtn}>
                {translations("dashboardForm.purchaseInvoice.formButton.print")}
            </Button>
            <Button className={styles.largeBtn}>
                {translations("dashboardForm.purchaseInvoice.formButton.save")}
            </Button>
        </span>
    );
};
