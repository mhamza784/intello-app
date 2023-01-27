import Quotation from "@/components/Dashboard/Forms/Quotation/Index";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
    // Add custom props here
};

export default () => <Quotation />;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en")),
    },
});
