import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    type: Yup.string().trim().required("Type is required"),

    invoiceDate: Yup.date().required("Invoice Date is required"),

    POnumber: Yup.string()
        .trim()
        .required("PO Number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "PO Number is not valid"
        ),

    invoiceCurrency: Yup.string()
        .trim()
        .required("Invoice Currency must be select"),

    invoiceNumber: Yup.string()
        .trim()
        .required("Invoice Number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "Invoice Number is not valid"
        ),

    paymentTerms: Yup.string().trim().required("Payment Terms must be select"),

    postingDate: Yup.string().trim().required("Payment Terms must be select"),

    supplierName: Yup.string()
        .trim()
        .required("Supplier Name is required")
        .matches(/^[a-zA-Z]*$/, "Supplier Name not contain numeric characters"),
});

export { userInfoSchema };
