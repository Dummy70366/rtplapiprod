import { axiosGet, axiosPost } from "../axios/axios";

const prefix = "/auth";
export const RegisterUser = (data: object) => {
  return axiosPost(`${prefix}/register`, data);
};

export const LoginUser = (data: object) => {
  return axiosPost(`${prefix}/login`, data);
};

export const ForgotPasswordUser = (data: object) => {
  return axiosPost(`${prefix}/forgotPassword`, data);
};

export const VerifyOTP = (data: object) => {
  return axiosPost(`${prefix}/verifyOtp`, data);
};

export const ResetUserPassword = (data: object) => {
  return axiosPost(`${prefix}/resetPassword`, data);
};

export const SendOTPRegister = (data: object) => {
  return axiosPost(`${prefix}/send-otp`, data);
};

export const GetCurrentUser = () => {
  return axiosGet(`${prefix}/getLoggedIn`);
};

export const ChangePasswordData = (data: object) => {
  return axiosPost(`${prefix}/change-password`, data);
};
