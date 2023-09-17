import * as Yup from "yup";
import {
  ConfirmPasswordValidation,
  CreatePasswordValidation,
} from "./PasswordValidation";
import { DOCUMENT_SUPPORTED_FORMATS } from "../../utils/commonConstants";

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
    birthdate: Yup.string().required(`Birthdate is required`),
    joiningDate: Yup.string().required(`Joining Date is required`),

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
    departmentID: Yup.string()
      .trim()
      .matches(/^\S*$/, `Whitespace is not allowed in Department`)
      .required(`Department code is required`),
    designationID: Yup.string()
      .trim()
      .matches(/^\S*$/, `Whitespace is not allowed in Designation`)
      .required(`Designation code is required`),
    companyID: Yup.string().required(`Company Name is required`),
    officeID: Yup.string().required(`Office address is required`),
    roleId: Yup.string().required(`Role is required`),
    // empIDCard: Yup.mixed()
    //   .required("Id Card is required")
    //   .test('fileType', "Only document files are allowed!", (value: any) => {
    //     if (value?.type) {
    //       return DOCUMENT_SUPPORTED_FORMATS.includes(value.type)
    //     } else {
    //       return true;
    //     }
    //   }
    //   ),
    // empAadharCard: Yup.mixed()
    //   .required("Adhar Card is required")
    //   .test('fileType', "Only document files are allowed!", (value: any) => {
    //     if (value?.type) {
    //       return DOCUMENT_SUPPORTED_FORMATS.includes(value.type)
    //     } else {
    //       return true;
    //     }
    //   }
    //   ),
    // empProfileIMg: Yup.mixed()
    //   .required("Profile Image is required")
    //   .test('fileType', "Only document files are allowed!", (value: any) => {
    //     if (value?.type) {
    //       return DOCUMENT_SUPPORTED_FORMATS.includes(value.type)
    //     } else {
    //       return true;
    //     }
    //   }
    //   ),
  });
