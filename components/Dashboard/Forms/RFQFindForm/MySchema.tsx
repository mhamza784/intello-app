import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    prNumber: Yup.string()
        .trim()
        .required("PR Number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "PR Number is not valid"
        ),

    supplierName: Yup.string()
        .trim()
        .required("Supplier Name is required")
        .matches(/^[a-zA-Z]*$/, "Supplier Name not contain numeric characters"),
});

export { userInfoSchema };
