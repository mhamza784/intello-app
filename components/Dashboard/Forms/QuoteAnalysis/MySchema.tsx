import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    RFQNumber: Yup.string()
        .trim()
        .required("RFQ number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "RFQ number is not valid"
        ),

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
