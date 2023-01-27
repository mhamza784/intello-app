module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                linearBg: "#073170",
                button: "#ADE8F4",
                btnColour: "#0096C7",
                blueHeading: "#062655",
                cardBackground: "#48CAE4",
                footerBg: "#0F356C",
                aboutUsBg: "#ECFCFF",
                greyText: "#8A8B8D",
                blueText: "#05234F",
                lightBlueText: "#1B99B2",
                darkBlueBtnBg: "#053038",
                lightGreyBg: "#F2F2F2",
                darkBlueBg: "#091E62",

                blockChainBg: "#0F356C",
                erpModulesBg: "#ECFCFF",
                signupFormBg: "#F5F5F5",
                signupTitleText: "#A6A6A6",
                signupInputText: "#A6A6A6",
                signupInputBg: "#F2F2F2",
                sideBarBg:
                    "linear-gradient(180deg, #073170 0%, #05234F 97.19%);",
                darkBlueText: "#072E68",
                dashboardFormBorder: "#F0F0F0",
                lightGrayBg: "#F4F4F4",
                DarkGrayishText: "#8D8888",
                lightGrayIconBg: "#EDEDED",
                darkGrayIconBG: "#D9D9D9",
            },
            backgroundImage: {
                "gradient-Background": "url('/linearBackground.png')",
                "whyChooseUs-Background": "url('/whychooseUsBg.jpg')",
                bgLogin: "url('/backgroundLogin.png')",
                "bg-imgBgVector": "url('/vector9.png')",
                bgSignup: "url('/images/SignUp.png')",
            },
            fontFamily: {
                poppins: "Poppins",
                helvetica: "Helvetica",
                itim: "Itim",
                montserrat: "Montserrat",
            },
        },
    },
    plugins: [],
};