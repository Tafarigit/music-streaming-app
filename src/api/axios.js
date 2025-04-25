import axios from "axios";

const instance = axios.create({
    baseUrl: "https://localhost.3001",
    headers: {
        "Content-Type": "application.json"
    },

});

export default instance;