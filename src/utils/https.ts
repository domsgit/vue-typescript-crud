import axios from "axios";

let https: any = {};
if (process.env.NODE_ENV === "development") {
  https = axios.create({
    baseURL: "/api/api",
    timeout: 50000
  });
} else {
  https = axios.create({
    baseURL: "/api/api",
    timeout: 50000
  });
}

https.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    // Do something with request error
    console.error("error: ", error);
    Promise.reject(error);
  }
);

https.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    console.error("error: " + error);
    return Promise.reject(error);
  }
);

export default https;
