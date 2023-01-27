import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    supplierName: Yup.string()
        .trim()
        .required("Supplier Name is required")
        .matches(/^[a-zA-Z]*$/, "Supplier Name not contain numeric characters"),

    bankAccount: Yup.string().trim().required("Bank Account is required"),

    supplierNum: Yup.string()
        .trim()
        .required("Supplier Number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "Supplier Number is not valid"
        ),

    paymentDate: Yup.date().required("Payment Date is required"),

    documentNo: Yup.string().trim().required("Document No is required"),

    invoiceNumber: Yup.string()
        .trim()
        .required("Invoice Number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "Invoice Number is not valid"
        ),

    SupplierName: Yup.string()
        .trim()
        .required("Supplier Name is required")
        .matches(/^[a-zA-Z]*$/, "Supplier Name not contain numeric characters"),
});

export { userInfoSchema };
