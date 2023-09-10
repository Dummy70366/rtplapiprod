import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../axios/axios";

const prefix = "/role";

export const GetRolesListData = (query: string = "") => {
  return axiosGet(`${prefix}/getRoleList${query}`);
};


export const GetRoleDataById = (id: string) => {
  return axiosGet(`${prefix}/${id}`);
};

export const AddRoleData = (data: object) => {
  return axiosPost(`${prefix}/addRole`, data);
};

export const EditRoleData = (data: object, id: string) => {
  return axiosPut(`${prefix}/${id}`, data);
};

export const DeleteRole = (id: number) => {
  return axiosDelete(`${prefix}/` + id);
};

// AddCompanyData,
//   EditCompanyData,
//   GetCompanyDataById,
