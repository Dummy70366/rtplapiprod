import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../axios/axios";

const prefix = "/department";

export const GetAllDepartment = (query: string) => {
    return axiosGet(`${prefix}/get_department_list/${query}`);
};

export const GetDepartmentDataById = (id: string) => {
    return axiosGet(`${prefix}/${id}`);
};

export const AddDepartmentData = (data: object) => {
    return axiosPost(`${prefix}`, data);
};

export const EditDepartmentData = (data: object, id: string) => {
    return axiosPut(`${prefix}/${id}`, data);
};

export const DeleteDepartment = (id: number) => {
    return axiosDelete(`${prefix}/` + id);
};
