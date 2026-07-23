import axios from "axios";


export default axios.create({
  baseURL: "https://localhost/growreviews",
    withCredentials: true,
})