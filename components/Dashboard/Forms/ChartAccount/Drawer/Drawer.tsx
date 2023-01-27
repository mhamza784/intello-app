import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import styles from "@/styles/ChartAccount.module.css";
import { Button, Drawer, Space } from "antd";
import Form from "./DrawerForm";

const App: React.FC = () => {
    const { t: translations } = useTranslation();

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button className={styles.button1} onClick={showDrawer}>
                {translations("dashboardForm.chartAccount.btn.newBtn")}
            </Button>
            <Drawer
                title={null}
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Form />
                <span className="gap-2 flex -order-last justify-end mt-[2%]">
                    <Space>
                        <Button onClick={onClose}>
                            {translations(
                                "dashboardForm.chartAccount.newForm.cancelBtn"
                            )}
                        </Button>
                        <Button htmlType="submit" type="primary">
                            {translations(
                                "dashboardForm.chartAccount.newForm.submitBtn"
                            )}
                        </Button>
                    </Space>
                </span>
            </Drawer>
        </>
    );
};

export default App;
