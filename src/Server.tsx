import axios from "axios";

const information = axios.create({
   baseURL: "https://www.greenhousesouth.com/Server",
   headers: {
    'Authorization': 'Bearer your_access_token',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
export default information;