import axios from "axios";

const https = axios.create({
    baseURL:"https://gnews.io/api/v4",
    headers: {
        "Content-Type": "application/json"
    }
})

export default https;