import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    mainAccount: Yup.string().trim().required("Main Account is required"),

    accountDescription: Yup.string()
        .trim()
        .required("Account Description is required"),

    accountType: Yup.string().trim().required("Account Type is required"),

    accountCategory: Yup.string()
        .trim()
        .required("Main Account Category is required"),

    defaultCurrency: Yup.string()
        .trim()
        .required("Default Currency is required"),

    userID: Yup.string().trim().required("User ID is required"),

    userGroup: Yup.string().trim().required("User Group is required"),
});

export { userInfoSchema };
