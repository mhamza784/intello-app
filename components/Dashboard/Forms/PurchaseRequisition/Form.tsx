import { useTranslation } from "next-i18next";
import { Form, Input, Col, Select, Row, Upload } from "antd";
import { useDispatch } from "react-redux";
import styles from "@/styles/DashboardForm.module.css";
import { ImAttachment } from "react-icons/im";
import * as prSlice from "src/redux/slices/purchaseRequisition";
import FormTable from "./Table/Table";
import PurchaseBtn from "./Modal/PurchaseHistory/PurchaseHistory";
import QTYStatus from "./Modal/QTYstatus/QTYstatus";
import FormTopBtn from "./FormTopBtn";

const formItemLayout = {
    labelCol: {
        span: 12,
    },
    wrapperCol: {
        span: 24,
    },
};
const DashboardForm = () => {
    const { t: translations } = useTranslation();
    const dispatch = useDispatch();

    const handleSubmit = (values: any) => {
        dispatch(prSlice.actions.createPRAction(values));
    };

    return (
        <Form
            size="middle"
            name="new-device-form"
            className={styles.form}
            {...formItemLayout}
            onFinish={handleSubmit}
            layout="vertical"
        >
            <Form.Item>
                <FormTopBtn />
            </Form.Item>

            <Row gutter={[24, 4]}>
                <Col span={12}>
                    <Form.Item
                        name="PurchaseRequisitionNumber"
                        label={
                            <span className="font-semibold text-xs  ">
                                {translations(
                                    "dashboardForm.purchaseForm.number"
                                )}
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: "You have to write the number",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="attachment"
                        label={
                            <span className="font-semibold text-xs  ">
                                {translations(
                                    "dashboardForm.purchaseForm.attachment"
                                )}
                            </span>
                        }
                    >
                        <Upload className="bg-lightGrayBg items-center">
                            <div className="flex  ">
                                <ImAttachment className="text-black bg-darkGrayIconBG rounded-sm p-1  text-xl ml-1 mb-0.5  " />
                            </div>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[24, 4]}>
                <Col span={12}>
                    <Form.Item
                        name="PurchaseRequisitionDescription"
                        label={
                            <span className="font-semibold text-xs  ">
                                {translations(
                                    "dashboardForm.purchaseForm.description"
                                )}
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: "You have to write the description",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="PurchaseRequisitionPreparer"
                        label={
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.purchaseForm.preparer"
                                )}
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: "You have to write the preparer",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[24, 4]}>
                <Col span={12}>
                    <Form.Item
                        name="PurchaseRequisitionStatus"
                        label={
                            <span className="font-semibold text-xs  ">
                                {translations(
                                    "dashboardForm.purchaseForm.status"
                                )}
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: "You have to write the status",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="PurchaseRequisitionCurrency"
                        label={
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.purchaseForm.currency"
                                )}
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: "You have to select the currency",
                            },
                        ]}
                    >
                        <Select
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[24, 4]}>
                <Col span={12}>
                    <Form.Item
                        name="PurchaseRequisitionDate"
                        label={
                            <span className="font-semibold text-xs  ">
                                {translations(
                                    "dashboardForm.purchaseForm.requestedDate"
                                )}
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: "You have to select the date",
                            },
                        ]}
                    >
                        <Input type="date" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="PurchaseRequisitionReason"
                        label={
                            <span className="font-semibold text-xs ">
                                {translations(
                                    "dashboardForm.purchaseForm.reason"
                                )}
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: "You have to select the reason",
                            },
                        ]}
                    >
                        <Select
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[24, 4]}>
                <Col span={12}>
                    <Form.Item
                        name="PurchaseRequisitionJustification"
                        label={
                            <span className="font-semibold text-xs  ">
                                {translations(
                                    "dashboardForm.purchaseForm.justification"
                                )}
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: "You have to write the justification",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <FormTable />
            <Form.Item>
                <div className="flex w-full justify-between mt-2">
                    <span className="gap-2 flex  font-semibold  justify-start">
                        <PurchaseBtn />
                        <QTYStatus />
                    </span>
                </div>
            </Form.Item>
        </Form>
    );
};

export default DashboardForm;
