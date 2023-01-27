import PurchaseRequisition from "@/components/Dashboard/Forms/PurchaseRequisition/Index";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Provider } from "react-redux";
import store from "src/redux/store";

type Props = {
    // Add custom props here
};

export default () => (
    <Provider store={store}>
        <PurchaseRequisition />
    </Provider>
);

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en")),
    },
});
