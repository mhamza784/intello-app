/* eslint-disable no-return-await */
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000/api";

console.log("process", process.env.NEXT_PUBLIC_BASE_API_URL);
export const getUsersAPI = async () => {
    return await axios.get("/user");
};

// export const createUserAPI = async (user: any) =>{
//   return await axios.post(`/user/addUser`, user);
// };

export const userLoginAPI = async (user: any) => {
    return await axios.post(`/user/login`, user);
};

export const createUserAPI = async (user: any) => {
    return await axios
        .post(`/user/addUser`, user)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            // what now?
            console.log(err);
        });
};
