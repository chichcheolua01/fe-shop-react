// import { IProduct } from "../interfaces/product"
// import instance from "./instance"

// const getToken = () => {
//   const { accessToken } = JSON.parse(localStorage.getItem('user')!)
//   return accessToken
// }

// export const getAllProduct = () => {
//     return instance.get("/products")
// }

// export const getOneProduct = (id:number|string) => {
//     return instance.get(`/products/${id}`)
// }

// export const removeProduct = (id:number|string) => {
//     return instance.delete(`/products/${id}`)
// }

// export const updateProduct = (product:IProduct) => {
//     return instance.put(`/products/${product._id}`, product)
// }

// export const createProduct = (product:IProduct) => {
//     return instance.post(`/products`, product)
// }

import { AxiosResponse } from "axios";
import { IProduct } from "../interfaces/product";
import instance from "./instance";

const getToken = () => {
  const { accessToken } = JSON.parse(localStorage.getItem("user")!);
  return accessToken;
};
export const getProducts = () => {
  return instance.get(`/products`);
};

export const getProduct = (id: number | string) => {
  return instance.get(`/products/${id}`);
};

export const removeProduct = (id: number | string) => {
  const accessToken = getToken();
  if (accessToken) {
    return instance.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
};

export const createProduct = (product: IProduct) => {
  const accessToken = getToken();
  if (accessToken) {
    return instance.post("/products", product, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
};

export const updateProduct = (product: IProduct, id: string | number) => {
  const accessToken = getToken();
  if (accessToken) {
    return instance.put(`/products/${id}`, product, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
};
