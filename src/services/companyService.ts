import { axiosGet } from "../axios/axios";

const prefix = "/company";

export const GetCompanyListData = () => {
  return axiosGet(`${prefix}/getCompanyList`);
};

export const GetAllOfficesById = (id: number) => {
  return axiosGet(`${prefix}/office/getOfficelistByCompany?companyID=${id}`);
};
