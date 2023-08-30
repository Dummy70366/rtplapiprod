import { axiosGet,axiosPost,axiosPut,axiosDelete } from "../axios/axios";

const prefix = "/company";

export const GetCompanyListData = (query: string) => {
  return axiosGet(`${prefix}/getCompanyList${query}`);
};

export const GetCompanyDataById = (id: string) => {
  return axiosGet(`${prefix}/${id}`);
};


export const AddCompanyData = (data: object) => {
  return axiosPost(`${prefix}/addCompnany`, data);
};

export const EditCompanyData = (data: object, id: string) => {
  // return {"response_type":"SUCCESS","data":'',"toast":true,"message":null};
  return axiosPut(`${prefix}/${id}`, data);
};

export const DeletCompany = (id: number) => {
  return axiosDelete(`${prefix}/` + id);
};



export const GetAllOfficesById = (id: number) => {
  return axiosGet(`${prefix}/office/getOfficelistByCompany?companyID=${id}`);
};
