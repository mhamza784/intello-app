import PurchaseOrder from "@/components/Dashboard/Forms/PurchaseOrder/Index";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
    // Add custom props here
};

export default () => <PurchaseOrder />;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en")),
    },
});
