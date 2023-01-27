import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
    companyName: Yup.string()
        .trim()
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-]*)$/gi,
            "Name can only contain Latin letters."
        )
        .required("Company Name is required"),

    email: Yup.string()
        .trim()
        .email("Must be a valid email")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Email Format is invalid")
        .required("Email is required"),

    contactCode: Yup.string().trim().required("Number Code is required"),

    contactNo: Yup.string()
        .trim()
        .required("Contact Number is required")
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "Phone number is not valid"
        ),
    message: Yup.string().trim().required("Message is required"),

    address: Yup.string().trim().required("Address is required"),

    country: Yup.string().required("Country is required"),

    city: Yup.string().trim().required("Message is required"),

    postalCode: Yup.string().trim().required("City is required"),

    industryType: Yup.string().trim().required("Industry Type is required"),

    yearFounded: Yup.string().trim().required("Date is required"),

    website: Yup.string()
        .trim()
        .required("Website is required")
        .matches(
            /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
            "Enter correct url!"
        ),
});

export { userInfoSchema };
