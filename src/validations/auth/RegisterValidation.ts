import * as Yup from "yup";
import {
  ConfirmPasswordValidation,
  CreatePasswordValidation,
} from "./PasswordValidation";

export const RegisterValidationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string()
      .trim()
      .matches(/^\S*$/, `Whitespace is not allowed in First Name`)
      .max(255, `Maximum 255 Characters allowed`)
      .required(`First Name is required`),
    lastName: Yup.string()
      .trim()
      .matches(/^\S*$/, `Whitespace is not allowed in Last Name`)
      .max(255, `Maximum 255 Characters allowed`)
      .required(`Last Name is required`),
    email: Yup.string()
      .email(`Email is invalid`)
      .max(255, `Maximum 255 Characters allowed`)
      .required(`Email is required`)
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, `Email is invalid`),
    password: CreatePasswordValidation(),
    confirmPassword: ConfirmPasswordValidation(),
    mobileNo: Yup.string()
      .nullable()
      .required(`Phone Number is required`)
      .test("len", `Phone Number is not valid`, (val) => val > "0000000000")
      .matches(/^[0-9]\d{9}$/, {
        message: `Phone number must be numbers only with 10 digit`,
        excludeEmptyString: false,
      }),
    empCode: Yup.string()
      .trim()
      .matches(/^\S*$/, `Whitespace is not allowed in Employee code`)
      .max(255, `Maximum 255 Characters allowed`)
      .required(`Employee code is required`),
    department: Yup.string()
      .trim()
      .matches(/^\S*$/, `Whitespace is not allowed in Department`)
      .max(255, `Maximum 255 Characters allowed`)
      .required(`Department code is required`),
    designation: Yup.string()
      .trim()
      .matches(/^\S*$/, `Whitespace is not allowed in Designation`)
      .max(255, `Maximum 255 Characters allowed`)
      .required(`Designation code is required`),
    companyName: Yup.string().required(`Company Name is required`),
    officeAddress: Yup.string().required(`Office address is required`),
    roleId: Yup.string().required(`Role is required`),
  });
