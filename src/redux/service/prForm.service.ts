import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000/api";

console.log("process", process.env.NEXT_PUBLIC_BASE_API_URL);

export const getPurchaseRequisitionAPI = async () => {
    return await axios.get("/pr");
};

export const createPurchaseRequisitionAPI = async (user: any) => {
    return await axios.post(`/pr`, user);
};
