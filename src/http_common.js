import axios from "axios";

const https = axios.create({
    baseURL:"http://newsapi.org/v2",
    headers: {
        "Content-Type": "application/json"
    }
})

export default https;