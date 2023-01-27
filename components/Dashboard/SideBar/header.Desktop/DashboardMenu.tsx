import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import "antd/dist/antd.css";
import styles from "@/styles/FormTopbar.module.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

const App = () => {
    const { t: translations } = useTranslation();

    return (
        <Menu mode="horizontal" className={styles.navbarBg}>
            <SubMenu
                title={
                    <span className="font-helvetica font-normal text-base">
                        {translations("navbarDashboard.dashboard.title")}
                    </span>
                }
            >
                <SubMenu
                    title={
                        <span className="font-helvetica font-normal text-base">
                            {translations(
                                "navbarDashboard.dashboard.orders.title"
                            )}
                        </span>
                    }
                    key="orders"
                >
                    <Menu.Item key="purchaseRequisition">
                        <Link
                            href={{
                                pathname: "/order/purchaserequisition",
                            }}
                            replace
                        >
                            <span className="font-helvetica font-normal">
                                {translations(
                                    "navbarDashboard.dashboard.orders.purchaseRequisition"
                                )}
                            </span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="quotation">
                        <Link
                            href={{
                                pathname: "/order/quotation",
                            }}
                            replace
                        >
                            <span className="font-helvetica font-normal">
                                {translations(
                                    "navbarDashboard.dashboard.orders.quotation"
                                )}
                            </span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="purchaseOrder">
                        <Link
                            href={{
                                pathname: "/order/purchaseOrder",
                            }}
                            replace
                        >
                            <span className="font-helvetica font-normal">
                                {translations(
                                    "navbarDashboard.dashboard.orders.purchaseOrder"
                                )}
                            </span>
                        </Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu
                    title={
                        <span className="font-helvetica font-normal text-base">
                            {translations(
                                "navbarDashboard.dashboard.vendor.title"
                            )}
                        </span>
                    }
                    key="vendor"
                >
                    <Menu.Item key="defineVendor">
                        <span className="font-helvetica font-normal">
                            {translations(
                                "navbarDashboard.dashboard.vendor.defineVendor"
                            )}
                        </span>
                    </Menu.Item>
                </SubMenu>

                <SubMenu
                    title={
                        <span className="font-helvetica font-normal text-base">
                            {translations(
                                "navbarDashboard.dashboard.payments.title"
                            )}
                        </span>
                    }
                    key="payments"
                >
                    <Menu.Item key="setting:1">
                        <Link
                            href={{
                                pathname: "/payments/payment",
                            }}
                            replace
                        >
                            <span className="font-helvetica font-normal">
                                {translations(
                                    "navbarDashboard.dashboard.payments.payment"
                                )}
                            </span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </SubMenu>

            <SubMenu
                title={
                    <span className="font-helvetica font-normal text-base">
                        {translations("navbarDashboard.apps&page.title")}
                    </span>
                }
            >
                <Menu.Item key="setting:3">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.apps&page.calender")}
                    </span>
                </Menu.Item>

                <Menu.Item key="setting:4">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.apps&page.invoice")}
                    </span>
                </Menu.Item>

                <Menu.Item key="setting:5">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.apps&page.users")}
                    </span>
                </Menu.Item>

                <Menu.Item key="setting:6">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.apps&page.roles")}
                    </span>
                </Menu.Item>

                <Menu.Item key="setting:7">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.apps&page.pages")}
                    </span>
                </Menu.Item>
            </SubMenu>

            <SubMenu
                title={
                    <span className="font-helvetica font-normal text-base">
                        {translations("navbarDashboard.components.title")}
                    </span>
                }
            >
                <Menu.Item key="setting:8">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.components.calender")}
                    </span>
                </Menu.Item>

                <Menu.Item key="setting:9">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.components.invoice")}
                    </span>
                </Menu.Item>

                <Menu.Item key="setting:10">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.components.users")}
                    </span>
                </Menu.Item>

                <Menu.Item key="setting:11">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.components.roles")}
                    </span>
                </Menu.Item>

                <Menu.Item key="setting:12">
                    <span className="font-helvetica font-normal">
                        {translations("navbarDashboard.components.pages")}
                    </span>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default App;
