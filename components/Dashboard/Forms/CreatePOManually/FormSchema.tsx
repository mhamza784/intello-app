import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    number: Yup.string()
        .trim()
        .required("PO Number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "PO Number is not valid"
        ),

    creationDate: Yup.string().trim().required("Creation Date is required"),

    supplierName: Yup.string()
        .trim()
        .required("Supplier Name is required")
        .matches(/^[a-zA-Z]*$/, "Supplier Name not contain numeric characters"),

    createdBy: Yup.string().trim().required("Created Name is required"),

    status: Yup.string().trim().required("Status is required"),

    expectedArrival: Yup.string()
        .trim()
        .required("Expected Arrival Date is required"),

    forwardFrom: Yup.string()
        .trim()
        .required("Forward From is required")
        .matches(/^[a-zA-Z]*$/, "Forward From not contain numeric characters"),

    forwardTo: Yup.string()
        .trim()
        .required("Forward To is required")
        .matches(/^[a-zA-Z]*$/, "Forward To not contain numeric characters"),

    receiptRouting: Yup.string().trim().required("Receipt Routing is required"),

    noteSupplier: Yup.string()
        .trim()
        .required("Note from Supplier is required"),

    paymentsTerms: Yup.string()
        .trim()
        .required("Payments Terms must be define"),

    createdDate: Yup.string().trim().required("Created Date is required"),

    freightTerms: Yup.string().trim().required("Freight Terms is required"),

    warningDelay: Yup.string().trim().required("Warning Delay is required"),

    daysEarly: Yup.string().trim().required("Days Early are required"),

    tolerance: Yup.string().trim().required("Tolerance is required"),

    daysLate: Yup.string().trim().required("Days Late are required"),

    action: Yup.string().trim().required("Action is required"),

    Action: Yup.string().trim().required("Action is required"),
});

export { userInfoSchema };
