import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    RFQNumber: Yup.string()
        .trim()
        .required("RFQ number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "RFQ number is not valid"
        ),

    creationDate: Yup.string().trim().required("Creation Date is required"),

    dueDate: Yup.string().trim().required("Due Date is required"),

    status: Yup.string().trim().required("Status is required"),

    description: Yup.string()
        .trim()
        .required("Description is required")
        .matches(/^[a-zA-Z]*$/, "Description not contain numeric characters"),

    currency: Yup.string().trim().required("Currency is required"),

    supplierName: Yup.string()
        .trim()
        .required("Supplier Name is required")
        .matches(/^[a-zA-Z]*$/, "Supplier Name not contain numeric characters"),
});

export { userInfoSchema };
