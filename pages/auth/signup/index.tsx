import SignupForm from "@/components/SignUpForm/DesktopView/SignupForm";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
    // Add custom props here
};

export default () => <SignupForm />;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en")),
    },
});
