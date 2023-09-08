import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../axios/axios";

const prefix = "/designation";

export const GetAllDesignation = (query: string) => {
    return axiosGet(`${prefix}/get_designation_list/${query}`);
};

export const GetDesignationDataById = (id: string) => {
    return axiosGet(`${prefix}/${id}`);
};

export const AddDesignationData = (data: object) => {
    return axiosPost(`${prefix}`, data);
};

export const EditDesignationData = (data: object, id: string) => {
    return axiosPut(`${prefix}/${id}`, data);
};

export const DeleteDesignation = (id: number) => {
    return axiosDelete(`${prefix}/` + id);
};
