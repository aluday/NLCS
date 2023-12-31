import axios from "axios";
import environment from "../assets/environment.json";
import { EndpointConstants } from "./constants";
import * as messages from "./messages";

const getBaseURL = () => {
  return environment.baseUrl;
};

/* STARTING USER REST DEFINATIONS */
export const signin = async (data) => {
  const endpoint = getBaseURL() + EndpointConstants.USER.SIGN_IN;
  const res = await axios.post(endpoint, data);
  return res.data;
};
export const createUser = async (data) => {
  const endpoint = getBaseURL() + EndpointConstants.USER.CREATE_USER;
  const res = await axios.post(endpoint, data);
  return res.data;
};
export const getCurrentUser = async (accessToken) => {
  const endpoint = getBaseURL() + EndpointConstants.USER.AUTHORIZE;
  const res = await axios.get(endpoint, {
    headers: {
      token: `Bearer ${accessToken}`,
    },
  });
  return res;
};
export const getUserDetail = async (id) => {
  const accessToken = localStorage.getItem("access_token");
  const endpoint = getBaseURL() + `/detail-user/${id}`;
  const res = await axios.get(endpoint, {
    headers: {
      token: `Bearer ${accessToken}`,
    },
  });
  return res;
};
export const createOrder = async (data) => {
  const endpoint = getBaseURL() + EndpointConstants.USER.CREATE_ORDER;
  const res = await axios.post(endpoint, data);
  return res;
};
export const updateUser = async (data, userId) => {
  const endpoint =
    getBaseURL() + EndpointConstants.USER.UPDATE_USER + `/${userId}`;
  const res = await axios.put(endpoint, data);
  return res.data;
};
/* ENDING USER REST DEFINATIONS */

/* STARTING ADMIN REST DEFINATIONS */
export const createProduct = async (data) => {
  const endpoint = getBaseURL() + EndpointConstants.ADMIN.CREATE_PRODUCT;
  const res = await axios.post(endpoint, data);
  return res;
};
export const getAllProducts = async (search, limit) => {
  let endpoint;
  if (search?.length > 0) {
    endpoint =
      getBaseURL() +
      `/product?filter=productName&filter=${search}&limit=${limit}`;
  } else {
    endpoint = getBaseURL() + `/product?limit=${limit}`;
  }
  const res = await axios.get(endpoint);
  return res;
};
export const getProductsByType = async (typeId) => {
  const endpoint = getBaseURL() + `/product/type/${typeId}`;
  const res = await axios.get(endpoint);
  return res.data;
};
export const getProductDetails = async (productId) => {
  const endpoint =
    getBaseURL() + EndpointConstants.USER.PRODUCT_DETAILS + `/${productId}`;
  const res = await axios.get(endpoint);
  return res;
};
export const updateProduct = async (data, productId) => {
  const endpoint =
    getBaseURL() + EndpointConstants.ADMIN.UPDATE_PRODUCT + `/${productId}`;
  const res = await axios.put(endpoint, data);
  return res;
};
export const deleteProduct = async (productId) => {
  const endpoint =
    getBaseURL() + EndpointConstants.ADMIN.DELETE_PRODUCT + `/${productId}`;
  const res = await axios.delete(endpoint);
  return res;
};
export const createProductType = async (data) => {
  const endpoint = getBaseURL() + EndpointConstants.ADMIN.CREATE_PRODUCT_TYPE;
  const res = await axios.post(endpoint, data);
  return res.data;
};
export const getAllProductTypes = async () => {
  const endpoint = getBaseURL() + EndpointConstants.USER.PRODUCT_TYPES;
  const res = await axios.get(endpoint);
  return res.data;
};
export const updateProductType = async (data, typeId) => {
  const endpoint =
    getBaseURL() + EndpointConstants.ADMIN.UPDATE_PRODUCT_TYPE + `/${typeId}`;
  const res = await axios.put(endpoint, data);
  return res;
};
export const deleteProductType = async (typeId) => {
  const endpoint =
    getBaseURL() + EndpointConstants.ADMIN.DELETE_PRODUCT_TYPE + `/${typeId}`;
  const res = await axios.delete(endpoint);
  return res;
};
export const getAllOrders = async () => {
  const endpoint = getBaseURL() + EndpointConstants.USER.ORDERS;
  const res = await axios.get(endpoint);
  return res.data;
};
export const getAllUsers = async () => {
  const endpoint = getBaseURL() + EndpointConstants.ADMIN.USERS;
  const res = await axios.get(endpoint);
  return res.data;
};
/* ENDING ADMIN REST DEFINATIONS */

export const handleError = (error) => {
  if (error.response) {
    // status code out of the range of 2xx
    console.log("Data :", error.response.data);
    console.log("Status :" + error.response.status);
    messages.errorNotification("Error!", error.response.data.message);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Error on setting up the request
    console.log("Error", error.message);
    messages.errorNotification("Error!", error.response.data.message);
  }
};
