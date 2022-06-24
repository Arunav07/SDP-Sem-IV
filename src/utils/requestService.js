import customAxios from "./axiosInterceptor";
import { includes } from "lodash";
import { store } from "../store";

const callApi = (isAuth, _url, _method, _headers, _body) => {
  let headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  if (isAuth) {
    const { auth } = store.getState();
    headers["x-auth-token"] = auth?.authToken;
  }
  let options = {};
  options.url = _url;
  options.method = _method;

  //Combining headers
  options.headers = {
    ...headers,
    ..._headers,
  };

  // Attaching body
  if (includes(["POST", "PUT", "PATCH"], _method)) {
    if (_headers["Content-Type"] === "multipart/form-data")
      options.data = _body;
    else options.data = JSON.stringify(_body);
  }
  else{
    options.params = _body.params
  }

  return customAxios(options)
    .then((data) => {
      return data;
    })
    .catch((err) => err);
};

export const authRequest = async (_url, _method, _headers, _body) => {
  return callApi(true, _url, _method, _headers, _body);
};

export const request = async (_url, _method, _headers, _body) => {
  return callApi(false, _url, _method, _headers, _body);
};
