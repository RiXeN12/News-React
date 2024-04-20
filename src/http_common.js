import axios from "axios";

const http = axios.create({
    baseURL:"http://newsapi.org/v2",
    headers: {
        "Content-Type": "application/json"
    }
})

export default http;