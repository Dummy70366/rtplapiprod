import { axiosGet } from "../axios/axios";

const prefix = "/role";

export const GetRolesListData = () => {
  return axiosGet(`${prefix}/getRoleList`);
};
