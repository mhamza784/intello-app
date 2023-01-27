import Dashboard from "@/components/Dashboard/dashboard/index";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
    // Add custom props here
};

export default () => <Dashboard />;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en")),
    },
});
