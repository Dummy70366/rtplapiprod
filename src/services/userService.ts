import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../axios/axios";

const prefix = "/users";

export const GetAllUser = (query: string) => {
  return axiosGet(`${prefix}${query}`);
};

export const GetUserDataById = (id: string) => {
  return axiosGet(`${prefix}/${id}`);
};

export const AddUserData = (data: object) => {
  return axiosPost(`${prefix}`, data);
};

export const EditUserData = (data: object, id: string) => {
  return axiosPut(`${prefix}/${id}`, data);
};

export const DeleteUser = (id: number) => {
  return axiosDelete(`${prefix}/` + id);
};
