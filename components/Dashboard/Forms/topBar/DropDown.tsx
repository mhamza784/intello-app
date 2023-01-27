import { useTranslation } from "next-i18next";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const DropDown = () => {
    const { t: translations } = useTranslation();

    const items: MenuProps["items"] = [];

    return (
        <Dropdown
            className="items-center flex "
            menu={{ items }}
            trigger={["click"]}
        >
            <Space className="text-black text-xs font-normal ">
                {translations("dashboardForm.formHeader.dropDown.title")}
                <DownOutlined className="text-black bg-lightGrayIconBg rounded-sm  text-xs ml-1 mb-0.5 " />
            </Space>
        </Dropdown>
    );
};

export default DropDown;
