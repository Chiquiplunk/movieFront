import axios from "axios";

export default axios.create({
    baseURL: 'https://b39c-190-233-78-196.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
})