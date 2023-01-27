import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    companyNumber: Yup.string()
        .trim()
        .required("Company Number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "Number is not valid"
        ),

    attachment: Yup.string().trim().required("Attachment is required"),

    description: Yup.string()
        .trim()
        .required("Description is required")
        .matches(/^[a-zA-Z]*$/, "Description not contain numeric characters"),

    preparer: Yup.string()
        .trim()
        .required("preparer is required")
        .matches(/^[a-zA-Z]*$/, "Preparer not contain numeric characters"),

    status: Yup.string().trim().required("Status is required"),

    currency: Yup.string().trim().required("Currency is required"),

    requester: Yup.string()
        .trim()
        .required("Requester is required")
        .matches(/^[a-zA-Z]*$/, "Requester not contain numeric characters"),

    supplierName: Yup.string()
        .trim()
        .required("Supplier Name is required")
        .matches(/^[a-zA-Z]*$/, "Supplier Name not contain numeric characters"),

    forwardFrom: Yup.string()
        .trim()
        .required("Forward From is required")
        .matches(/^[a-zA-Z]*$/, "Forward From not contain numeric characters"),

    forwardTo: Yup.string()
        .trim()
        .required("Forward To is required")
        .matches(/^[a-zA-Z]*$/, "Forward To not contain numeric characters"),
});
export { userInfoSchema };
