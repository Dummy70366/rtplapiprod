import Modal from "@/components/modal/Modal";
import Card from "@/components/card/Card";
import { Form, Formik, FormikValues } from "formik";
import Textarea from "@/components/formComponents/textarea/Textarea";
import TextField from "@/components/formComponents/textField/TextField";
import DateComponent from "@/components/formComponents/dateComponent/DateComponent";

// import {
//   AddOfficeData
// } from "@/services/companyService";
import Button from "@/components/formComponents/button/Button";
// import { CompanyValidationSchema } from "@/validations/company/CompanyValidation";
import { useEffect, useState } from "react";
import { PlusIcon } from "../svgIcons";
import FileInput from "@/components/formComponents/fileInput/FileInput";


const defaultVisitorInitialValues: any = {
  vFirstName: "",
  vLastName: "",
  };
  const defaultCompanyInitialValues: any = {
    vCompanyName: "",
    vDesignation: "",
    vCompanyAddress: "",
    vCompanyContact: "",
    vCompanyEmail: "",
    };
interface FormProps {
    isAddNew:boolean
    // visitorCount:number
    
}
const MeetingForm = ({
    isAddNew,
    // visitorCount,
  }: FormProps) => {
    const [loader, setLoader] = useState<boolean>(false);

    const [formCount, setFormCount] = useState(1);
    const [visitorData, setVisitorData] = useState([]);
    const [initialValues, setInitialValues] = useState({
      visitors:[],
      company:{},
      purpose:""
    });
    

    const OnSubmit = async (values: FormikValues) => {
        
        console.log(values);
        
      };

      useEffect(() => {
        let arr = [];
        let arr2 = [];
        for (let i = 0; i < formCount; i++) {
          arr.push({...defaultVisitorInitialValues});
        }
        // console.log(arr);
        setInitialValues({visitors:arr,company:defaultCompanyInitialValues,purpose:""});
        
        
      }, [formCount]);

      const onAddClick = () =>{
        setFormCount(count=>count+1);
      }



  return (
    <>

        
      <Formik
            initialValues={initialValues}
            enableReinitialize={true}

            // validationSchema={CompanyValidationSchema()}
            onSubmit={OnSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <Card  title="Company" parentClass="mb-5 last:mb-0">
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
                      name={`company.vDesignation`}
                      parentClass="col-span-1"
                      type="text"
                      smallFiled={true}
                      label={"Company Designation"}
                      isCompulsory={true}
                      placeholder={"Enter Company Designation"}
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
                  {isAddNew && <div className="flex justify-end mb-4">
                  <div className="flex flex-wrap 1400:flex-nowrap gap-4">
                        <Button onClickHandler={()=>{onAddClick()}}  variant={"primary"} parentClass="" icon={<PlusIcon />}>
                            Add New Visitor
                        </Button>
                  </div>
                </div>}
               
                {
                initialValues.visitors.map((val,key)=>{
                  return <Card key={"visotr-frm"+key} title={isAddNew ? "Visitor "+(key+1) : 'Visitor Details'} parentClass="mb-5 last:mb-0">
                  <div className="grid grid-cols-2 gap-5 ">
                  
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
                     <DateComponent
                      name={`visitors[${key}].vDateOfBirth`}
                      smallFiled
                      label={"birthdate Date"}
                      parentClass="col-span-1"
                      // onChange={(date) => {
                      //   setFieldValue("endDate", date);
                      // }}
                      isCompulsory={true}
                      placeholder={"Enter Other Info (e.g. Month)"}
                    />
                     <DateComponent
                      name={`visitors[${key}].vAnniversaryDate`}
                      smallFiled
                      label={"Anniversary Date"}
                      parentClass="col-span-1"
                      // onChange={(date) => {
                      //   setFieldValue("endDate", date);
                      // }}
                      isCompulsory={true}
                      placeholder={"Enter Other Info (e.g. Month)"}
                    />
                    <Card title="Image" parentClass="col-span-1 mb-5 last:mb-0">
                      <FileInput
                        setValue={()=>console.log('file')}
                        name={`visitors[${key}].vImage`}
                        value={null}
                        isImage={true}
                      />
                    </Card>
                    <Card title="Id Card Document" parentClass="col-span-1 mb-5 last:mb-0">
                      <FileInput
                        setValue={()=>console.log('file')}
                        name={`visitors[${key}].vIDDoc`}
                        value={null}
                        isImage={false}
                      />
                    </Card>

                   
                  </div>

                </Card>
                })}
              
                <div className={`flex gap-4 justify-end p-1`}>
                  <Button type="submit" variant={"primary"} loader={loader}>
                    Save
                  </Button>
                 
                </div>
              </Form>
            )}
          </Formik>
    </>
  );
};

export default MeetingForm;
