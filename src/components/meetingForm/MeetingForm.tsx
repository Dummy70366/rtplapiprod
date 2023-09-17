import Modal from "@/components/modal/Modal";
import Card from "@/components/card/Card";
import { Form, Formik, FormikValues, FieldArray } from "formik";
import Textarea from "@/components/formComponents/textarea/Textarea";
import TextField from "@/components/formComponents/textField/TextField";
import DateComponent from "@/components/formComponents/dateComponent/DateComponent";

import { AddNewVisitorData } from "@/services/visitorService";
import Button from "@/components/formComponents/button/Button";
import { VisitorValidationSchema } from "@/validations/visitor/VisitorValidation";
import { useEffect, useState } from "react";
import { PlusIcon, CrossIcon } from "../svgIcons";
import FileInput from "@/components/formComponents/fileInput/FileInput";

const defaultVisitorInitialValues: any = {
  vFirstName: "",
  vLastName: "",
  vDesignation: "",
  vDateOfBirth: "",
  vImage: {},
  vIDDoc: {},
  vAnniversaryDate: "",
};
const defaultCompanyInitialValues: any = {
  vCompanyName: "",
  vCompanyAddress: "",
  vCompanyContact: "",
  vCompanyContactPerson: "",
  vCompanyEmail: "",
};
interface FormProps {
  isAddNew: boolean;
  // visitorCount:number
}
const MeetingForm = ({ isAddNew }: FormProps) => {
  const [loader, setLoader] = useState<boolean>(false);

  const [initialValues, setInitialValues] = useState({
    visitors: [{ ...defaultVisitorInitialValues }],
    company: defaultCompanyInitialValues,
    purpose: "",
  });

  const OnSubmit = async (values: FormikValues) => {
    let formdata = {
      purpose: values.purpose,
      visitors: values.visitors.map((visitor) => {
        return {
          vFirstName: visitor.vFirstName,
          vLastName: visitor.vLastName,
          vDateOfBirth: visitor.vDateOfBirth,
          vImage: "url//fdfdslf.com",
          vIDDoc: "sds./sdsd/dasd/",
          vCompanyName: values.company.vCompanyName,
          vDesignation: visitor.vDesignation,
          vCompanyAddress: values.company.vCompanyAddress,
          vCompanyContact: values.company.vCompanyContact,
          vCompanyEmail: values.company.vCompanyEmail,
          vAnniversaryDate: visitor.vAnniversaryDate,
        };
      }),
    };

    console.log(formdata);
    const response = await AddNewVisitorData(formdata);
    if (response?.data?.response_type === "SUCCESS") {
      alert("done");
    }
    // ;
  };

  useEffect(() => {
    if (!isAddNew) {
      //setFormCount(1);
      let arr = [];
      arr.push({ ...defaultVisitorInitialValues });
      setInitialValues({
        visitors: arr,
        company: defaultCompanyInitialValues,
        purpose: "",
      });
    }
  }, [isAddNew]);

  return (
    <>
      <Formik
        // initialValues={initialData}
        initialValues={initialValues}
        enableReinitialize={false}
        validationSchema={VisitorValidationSchema()}
        onSubmit={OnSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Card title="Company" parentClass="mb-5 last:mb-0">
              <>
                <div className="grid grid-cols-3 gap-5 mb-5">
                  <TextField
                    name={`company.vCompanyName`}
                    parentClass="col-span-1"
                    type="text"
                    smallFiled={true}
                    label={"Company Name"}
                    isCompulsory={true}
                    placeholder={"Enter Company Name"}
                  />

                  <TextField
                    name={`company.vCompanyEmail`}
                    parentClass="col-span-1"
                    type="text"
                    smallFiled={true}
                    label={"Company Email"}
                    isCompulsory={true}
                    placeholder={"Enter Company Designation"}
                  />
                  <TextField
                    name={`company.vCompanyContact`}
                    parentClass="col-span-1"
                    type="text"
                    smallFiled={true}
                    label={"Company Contact"}
                    isCompulsory={true}
                    placeholder={"Enter Company Designation"}
                  />
                  <TextField
                    name={`company.vCompanyContactPerson`}
                    parentClass="col-span-1"
                    type="text"
                    smallFiled={true}
                    label={"Contact Person Name"}
                    isCompulsory={true}
                    placeholder={"Enter Contact Person Name"}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <Textarea
                    parentClass="col-span-1"
                    name={`company.vCompanyAddress`}
                    type="text"
                    smallFiled={true}
                    placeholder={"Enter Company Address"}
                    label={"Company Address"}
                  />
                  <Textarea
                    parentClass="col-span-1"
                    name="purpose"
                    type="text"
                    smallFiled={true}
                    placeholder={"Enter Purpose"}
                    label={"Purpose"}
                  />
                </div>
              </>
            </Card>
            <FieldArray name="visitors">
              {(filedArrayProps) => {
                const { visitors } = values;
                const { push, remove, form } = filedArrayProps;
                return (
                  <>
                    {visitors.map((val, key) => {
                      return (
                        <Card
                          key={"visotr-frm" + key}
                          title={
                            isAddNew
                              ? "Person  " + (key + 1)
                              : "Personal Details"
                          }
                          parentClass="mb-5 last:mb-0"
                        >
                          <>
                            <div className="grid grid-cols-12 gap-2">
                              <div
                                className={
                                  "grid  grid-cols-3 gap-5 " +
                                  (isAddNew ? "col-span-11" : "col-span-12")
                                }
                              >
                                <TextField
                                  name={`visitors[${key}].vFirstName`}
                                  parentClass="col-span-1"
                                  type="text"
                                  smallFiled={true}
                                  label={"First Name"}
                                  isCompulsory={true}
                                  placeholder={"Enter First Name"}
                                />

                                <TextField
                                  name={`visitors[${key}].vLastName`}
                                  parentClass="col-span-1"
                                  type="text"
                                  smallFiled={true}
                                  label={"Last Name"}
                                  isCompulsory={true}
                                  placeholder={"Enter Last Name"}
                                />
                                <TextField
                                  name={`visitors[${key}].vDesignation`}
                                  parentClass="col-span-1"
                                  type="text"
                                  smallFiled={true}
                                  label={"Designation"}
                                  isCompulsory={true}
                                  placeholder={"Enter Designation"}
                                />
                                <DateComponent
                                  name={`visitors[${key}].vDateOfBirth`}
                                  smallFiled
                                  label={"Birth Date"}
                                  parentClass="col-span-1"
                                  dateFormat="yyyy-mm-dd"
                                  onChange={(date) => {
                                    setFieldValue(
                                      `visitors[${key}].vDateOfBirth`,
                                      date
                                    );
                                  }}
                                  isCompulsory={true}
                                  placeholder={"Enter Other Info (e.g. Month)"}
                                />
                                <DateComponent
                                  name={`visitors[${key}].vAnniversaryDate`}
                                  smallFiled
                                  label={"Anniversary Date"}
                                  parentClass="col-span-1"
                                  dateFormat="yyyy-mm-dd"
                                  onChange={(date) => {
                                    setFieldValue(
                                      `visitors[${key}].vAnniversaryDate`,
                                      date
                                    );
                                  }}
                                  isCompulsory={true}
                                  placeholder={"Enter Other Info (e.g. Month)"}
                                />
                                <div className="grid col-span-3 grid-cols-2 gap-5 ">
                                  <Card
                                    title="Image"
                                    parentClass="col-span-1 mb-5 last:mb-0"
                                  >
                                    <FileInput
                                      setValue={(filed, file) => {
                                        setFieldValue(filed, file);
                                      }}
                                      name={`visitors[${key}].vImage`}
                                      value={null}
                                      isImage={true}
                                    />
                                  </Card>
                                  <Card
                                    title="Id Card Document"
                                    parentClass="col-span-1 mb-5 last:mb-0"
                                  >
                                    <FileInput
                                      setValue={(filed, file) => {
                                        setFieldValue(filed, file);
                                      }}
                                      name={`visitors[${key}].vIDDoc`}
                                      value={null}
                                      isImage={false}
                                    />
                                  </Card>
                                </div>
                              </div>
                              {isAddNew && (
                                <div className="col-span-1">
                                  {1 < visitors.length && (
                                    <Button
                                      onClickHandler={() => remove(key)}
                                      variant={"primaryBorder"}
                                      parentClass="my-5 w-90"
                                    >
                                      <CrossIcon />
                                    </Button>
                                  )}
                                  {key == visitors.length - 1 &&
                                    visitors.length < 5 && (
                                      <Button
                                        onClickHandler={(e) =>
                                          push({
                                            ...defaultVisitorInitialValues,
                                          })
                                        }
                                        variant={"primary"}
                                        parentClass="my-5 w-100"
                                      >
                                        <PlusIcon />
                                      </Button>
                                    )}
                                </div>
                              )}
                            </div>
                          </>
                        </Card>
                      );
                    })}
                  </>
                );
              }}
            </FieldArray>

            <div
              className={
                "mx-10 my-5 flex gap-4  p-1 " +
                (isAddNew ? "justify-end" : "justify-end")
              }
            >
              <Button type="submit" variant={"primary"} loader={loader}>
                {isAddNew ? "Save" : "Submit Request"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MeetingForm;
