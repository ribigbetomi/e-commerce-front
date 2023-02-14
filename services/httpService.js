// import axios from "axios";
// import logger from "./logService";
// import { toast } from "react-toastify";

// axios.interceptors.response.use(null, (error) => {
//   // the null is supposed to be success but you dont want to log anything if the response is successful
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   if (!expectedError) {
//     logger.log(error);
//     toast.error("An unexpected error occured");
//   }
//   return Promise.reject(error);
// });
