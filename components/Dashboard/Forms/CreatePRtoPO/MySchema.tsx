import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    PRNumber: Yup.string()
        .trim()
        .required("PR number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "PR number is not valid"
        ),

    supplierName: Yup.string()
        .trim()
        .required("Supplier Name is required")
        .matches(/^[a-zA-Z]*$/, "Supplier Name not contain numeric characters"),
});

export { userInfoSchema };
