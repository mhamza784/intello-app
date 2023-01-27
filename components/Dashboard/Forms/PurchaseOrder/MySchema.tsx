import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    companyNumber: Yup.string().trim().required("Company Number is required"),
    supplier: Yup.string().trim().required("Supplier is required"),
    status: Yup.string().trim().required("Status is required"),
    paymentTerms: Yup.string().trim().required("Payment Terms is required"),
    shipTo: Yup.string().trim().required("Ship To is required"),
    creationDate: Yup.string().trim().required("Creation Date is required"),
    createdBy: Yup.string().trim().required("Created By is required"),
    expectedArrival: Yup.string()
        .trim()
        .required("Expected Arrival is required"),
    paymentMethod: Yup.string().trim().required("Payment Method is required"),
    billTo: Yup.string().trim().required("Bill To is required"),
});
export { userInfoSchema };
