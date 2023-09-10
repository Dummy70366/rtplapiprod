export interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  empCode: string;
  department: string;
  mobileNo: number | null;
  designation: string;
  companyName: string | number;
  officeAddress: string | number;
  roleId: string | number;
  empIDCard: object,
  empAadharCard: object,
  empProfileIMg: object,
}
