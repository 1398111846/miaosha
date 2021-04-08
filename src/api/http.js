import { request } from "./axios";

// alert("http")
class HTTP {
  get(url, data, method = "get") {
    return request(url, data, method);
  }
  post(url, data, method = "post") {
   // alert("shiyongle")
    return request(url, data, method);
  }

  put(url, data, method = "put") {
    return request(url, data, method);
  }
}
const https = new HTTP();


 export default https;