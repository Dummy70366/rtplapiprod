import Button from "@/components/formComponents/button/Button";
import SelectComponent from "@/components/formComponents/customSelect/Select";
import TextField from "@/components/formComponents/textField/TextField";
import DateComponent from "@/components/formComponents/dateComponent/DateComponent";
import FileInput from "@/components/formComponents/fileInput/FileInput";

import { IconEye, IconEyeSlash } from "@/components/svgIcons";
import { IRegisterForm } from "@/interface/auth/registerInterface";
import { Option } from "@/interface/customSelect/customSelect";
import {
  GetAllOfficesById,
  GetCompanyListData,
} from "@/services/companyService";
import { GetAllDepartment } from "@/services/departmentService";
import { GetAllDesignation } from "@/services/designationService";
import { RegisterUser } from "@/services/authService";
import { RegisterValidationSchema } from "@/validations/auth/RegisterValidation";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetRolesListData } from "@/services/roleService";
import Card from "@/components/card/Card";

const Register = () => {
  // const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [companyOptions, setCompanyOptions] = useState<Option[]>([]);
  const [roleOptions, setRoleOptions] = useState<Option[]>([]);
  const [departmentData, setDepartmentData] = useState<any>([]);
  const [designationData, setDesignationData] = useState<any>([]);
  const [companyId, setCompanyId] = useState<string>("");
  const [officeAddressOptions, setOfficeAddressOptions] = useState<Option[]>(
    []
  );
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const defaultInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    birthdate: "",
    joiningDate: "",
    password: "",
    confirmPassword: "",
    empCode: "",
    departmentID: "",
    designationID: "",
    mobileNo: null,
    companyID: "",
    officeID: "",
    roleId: "",
    empIDCard: {},
    empAadharCard: {},
    empProfileIMg: {},
  };

  useEffect(() => {
    getCompanyList();
    getRolesList();
    getAllDepartment();
    getAllDesignation();
  }, []);

  useEffect(() => {
    if (companyId !== "" || companyId !== undefined || companyId !== null) {
      getAddressListByCompanyId(companyId);
    }
  }, [companyId]);

  async function getCompanyList() {
    const response = await GetCompanyListData();
    if (response?.data.response_type === "SUCCESS") {
      // console.log(response?.data.data.data);
      const temp = response?.data.responseData.data.map((value: any) => ({
        label: value.Name,
        value: value.companyID,
      }));
      setCompanyOptions(temp);
    }
  }
  async function getRolesList() {
    const response = await GetRolesListData();

    if (response?.data.response_type === "SUCCESS") {
      const temp = response?.data.responseData.data.map((value: any) => ({
        label: value.role,
        value: value.roleID,
      }));
      setRoleOptions(temp);
    }
  }

  const getAddressListByCompanyId = async (id: string) => {
    if (id) {
      const response = await GetAllOfficesById(Number(id));
      if (response?.data.response_type === "SUCCESS") {
        const temp = response?.data.responseData.data.map((value: any) => ({
          label: value.Address,
          value: value.officeID,
        }));
        setOfficeAddressOptions(temp);
      }
    }
  };
  const getAllDepartment = async () => {
    let response = await GetAllDepartment("");
    if (response?.data?.responseData) {
      const resultData = response?.data?.responseData.data;
      setDepartmentData(
        resultData.length <= 0
          ? []
          : resultData.map((value) => ({
              label: value.department,
              value: value.departmentID,
            }))
      );
    }
  };
  const getAllDesignation = async () => {
    const response = await GetAllDesignation("");
    if (response?.data?.responseData) {
      const resultData = response?.data?.responseData.data;
      setDesignationData(
        resultData.length <= 0
          ? []
          : resultData.map((value) => ({
              label: value.designation,
              value: value.designationID,
            }))
      );
    }
  };

  async function OnSubmit(data: any) {
    setLoader(true);
    const formData = new FormData();
    formData.append("phone", data.mobileNo);
    formData.append("companyID", data.companyID);
    formData.append("officeID", data.officeID);
    formData.append("roleID", data.roleId);
    formData.append("empCode", data.empCode);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("birthDate", data.birthdate);
    formData.append("joiningDate", data.birthdate);
    formData.append("departmentID", data.departmentID);
    formData.append("designationID", data.designationID);
    formData.append("password", data.password);
    formData.append("isActive", "false");
    formData.append("empIDCard", data.empIDCard);
    formData.append("empAadharCard", data.empAadharCard);
    formData.append("empProfileIMg", data.empProfileIMg);
    // console.log(data);
    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    const response = await RegisterUser(formData);
    setLoader(false);
  }
  return (
    <div>
      <>
        <div className="min-h-dvh bg-offWhite p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-50px flex 1200:items-center">
          <div className="max-w-[1545px] mx-auto w-full">
            <div className="flex flex-wrap justify-between">
              <div className="img-wrapper hidden 1200:block xl:max-w-[450px] 2xl:max-w-[669px] h-auto w-full">
                <img
                  src="/assets/images/register.jpg"
                  width={669}
                  height={669}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
              {/* <div className="auth-box-wrap xl:max-w-[600px] 2xl:max-w-[720px]  w-full "> */}
              <div className="auth-box-wrap xl:max-w-[600px] 2xl:max-w-[720px] xl:max-h-[500px] 2xl:max-h-[620px] w-full overflow-scroll">
                <div className="bg-white w-full py-8 xl:py-12 2xl:py-16 rounded-15">
                  <div className="max-w-[460px] mx-auto text-center">
                    <div className="logo mb-5">
                      <img
                        src="/assets/images/riseglow-removebg-preview.png"
                        className="mx-auto max-w-[159px]"
                        width={159}
                        height={57}
                        alt=""
                      />
                    </div>
                    <p className="text-30px mb-4">
                      Register to Rise and Glow Portal
                    </p>

                    <div className="input-list-wrapper mt-10 text-left">
                      <Formik
                        initialValues={defaultInitialValues}
                        onSubmit={OnSubmit}
                        validationSchema={RegisterValidationSchema}
                      >
                        {({ setFieldValue, values }) => (
                          <Form>
                            <div className="input-item">
                              <TextField
                                parentClass={"mb-6"}
                                type={"text"}
                                label="First Name"
                                name="firstName"
                                isCompulsory={true}
                                placeholder="First Name"
                              />
                            </div>
                            <div className="input-item">
                              <TextField
                                parentClass={"mb-6"}
                                type={"text"}
                                label="Last Name"
                                name="lastName"
                                isCompulsory={true}
                                placeholder="Last Name"
                              />
                            </div>
                            <div className="input-item">
                              <TextField
                                parentClass={"mb-6"}
                                type={"email"}
                                label="Email"
                                name="email"
                                isCompulsory={true}
                                placeholder="Email"
                              />
                            </div>
                            <div className="input-item">
                              <TextField
                                parentClass={"mb-6"}
                                type={"text"}
                                label="Mobile Number"
                                name="mobileNo"
                                isCompulsory={true}
                                placeholder="Mobile Number"
                              />
                            </div>

                            <div className="input-item">
                              <Card
                                title="Profile Image"
                                parentClass="col-span-1 mb-5 last:mb-0"
                              >
                                <FileInput
                                  setValue={(filed, file) => {
                                    setFieldValue(filed, file);
                                  }}
                                  name="empProfileIMg"
                                  value={null}
                                  isImage={false}
                                />
                              </Card>
                            </div>

                            <div className="input-item">
                              <DateComponent
                                name={`birthdate`}
                                smallFiled
                                label={"Birth Date"}
                                parentClass="col-span-1 mb-6"
                                dateFormat="dd-MM-yy"
                                onChange={(date) => {
                                  setFieldValue(`birthdate`, date);
                                }}
                                isCompulsory={true}
                                placeholder={"Enter Other Info (e.g. Month)"}
                              />
                            </div>
                            <div className="input-item">
                              <DateComponent
                                name={`joiningDate`}
                                smallFiled
                                label={"Joining Date"}
                                parentClass="col-span-1 mb-6"
                                dateFormat="dd-MM-yy"
                                onChange={(date) => {
                                  setFieldValue(`joiningDate`, date);
                                }}
                                isCompulsory={true}
                                placeholder={"Enter Other Info (e.g. Month)"}
                              />
                            </div>
                            <div className="input-item">
                              <TextField
                                parentClass={"mb-6"}
                                type={"text"}
                                label="Employee Code"
                                name="empCode"
                                isCompulsory={true}
                                placeholder="Employee Code"
                              />{" "}
                            </div>
                            <div className="input-item">
                              <SelectComponent
                                name="departmentID"
                                options={departmentData}
                                isCompulsory={true}
                                isMulti={false}
                                parentClass="col-span-1 mb-6"
                                label="Designation"
                                selectedValue={values.departmentID}
                                placeholder="Select"
                                onChange={(option: any) => {
                                  console.log(option);
                                  setFieldValue("departmentID", option.value);
                                }}
                              />
                            </div>
                            <div className="input-item">
                              <SelectComponent
                                name="designationID"
                                options={designationData}
                                isCompulsory={true}
                                isMulti={false}
                                parentClass="col-span-1 mb-6"
                                label="Designation"
                                selectedValue={values.designationID}
                                placeholder="Select"
                                onChange={(option: any) => {
                                  console.log(option);
                                  setFieldValue("designationID", option.value);
                                }}
                              />
                            </div>

                            <div className="input-item">
                              <SelectComponent
                                name="companyID"
                                options={companyOptions}
                                isCompulsory={true}
                                isMulti={false}
                                parentClass="mb-6"
                                label="Company"
                                placeholder="Select"
                                selectedValue={values.companyID}
                                onChange={(option: Option | Option[]) => {
                                  setFieldValue(
                                    "companyID",
                                    (option as Option).value
                                  );
                                  setCompanyId(
                                    String((option as Option).value)
                                  );
                                }}
                              />
                            </div>
                            <div className="input-item">
                              <SelectComponent
                                parentClass="mb-6"
                                name="officeID"
                                options={officeAddressOptions}
                                isCompulsory={true}
                                isMulti={false}
                                label="Office Addresses"
                                placeholder="Select"
                                selectedValue={values.officeID}
                                onChange={(option: Option | Option[]) => {
                                  setFieldValue(
                                    "officeID",
                                    (option as Option).value
                                  );
                                }}
                              />{" "}
                            </div>
                            <div className="input-item">
                              <SelectComponent
                                name="roleId"
                                options={roleOptions}
                                isCompulsory={true}
                                isMulti={false}
                                parentClass="mb-6"
                                label="Role"
                                placeholder="Select"
                                selectedValue={values.roleId}
                                onChange={(option: Option | Option[]) => {
                                  setFieldValue(
                                    "roleId",
                                    (option as Option).value
                                  );
                                }}
                              />
                            </div>
                            <div className="input-item">
                              <TextField
                                parentClass={"mb-6"}
                                type={showPassword ? "text" : "password"}
                                label="Create Password"
                                name="password"
                                isCompulsory={true}
                                placeholder="Create Password"
                                icon={
                                  <div
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-10 rtl:left-4 rtl:right-auto cursor-pointer"
                                  >
                                    {showPassword ? (
                                      <IconEye />
                                    ) : (
                                      <IconEyeSlash />
                                    )}
                                  </div>
                                }
                              />{" "}
                            </div>
                            <div className="input-item">
                              <TextField
                                parentClass={"mb-6"}
                                type={showConfirmPassword ? "text" : "password"}
                                label="Confirm Password"
                                name="confirmPassword"
                                isCompulsory={true}
                                placeholder="Confirm Password"
                                icon={
                                  <div
                                    onClick={() =>
                                      setShowConfirmPassword(
                                        !showConfirmPassword
                                      )
                                    }
                                    className="absolute right-4 top-10 rtl:left-4 rtl:right-auto cursor-pointer"
                                  >
                                    {showConfirmPassword ? (
                                      <IconEye />
                                    ) : (
                                      <IconEyeSlash />
                                    )}
                                  </div>
                                }
                              />{" "}
                            </div>
                            <div className="input-item">
                              <Card
                                title="ID Card"
                                parentClass="col-span-1 mb-6"
                              >
                                <FileInput
                                  setValue={(filed, file) => {
                                    setFieldValue(filed, file);
                                  }}
                                  name="empIDCard"
                                  value={null}
                                  isImage={false}
                                />
                              </Card>
                            </div>
                            <div className="input-item">
                              <Card
                                title="Adhar Card"
                                parentClass="col-span-1 mb-5 last:mb-0"
                              >
                                <FileInput
                                  setValue={(filed, file) => {
                                    setFieldValue(filed, file);
                                  }}
                                  name="empAadharCard"
                                  value={null}
                                  isImage={false}
                                />
                              </Card>
                            </div>

                            <div className="input-item">
                              <Button
                                variant={"primary"}
                                type="submit"
                                className="w-full !text-base/6"
                                parentClass="mt-10"
                                loader={loader}
                              >
                                Register
                              </Button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                  <div className="modal-footer py-5 px-2 border-t border-primaryBlack1/20">
                    <p className="text-center font-BinerkaDemo text-base">
                      <span className="inline-block text-primaryBlack1">
                        Already have an account ?
                      </span>
                      <Link to="/login">
                        <span className="inline-block cursor-pointer text-inputBorder ms-1 text-primaryRed hover:underline ">
                          Login
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="modal-footer py-5 px-2 border-t border-primaryBlack1/20">
                  <p className="text-center font-BinerkaDemo text-base">
                    <span className="inline-block text-primaryBlack1">
                      Register to Visit ?
                    </span>
                    <Link to="/visitor/register">
                      <span className="inline-block cursor-pointer text-inputBorder ms-1 text-primaryRed hover:underline ">
                        Visitor Registration
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
