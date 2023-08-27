import {
  Option,
  SelectComponentProps,
} from "@/interface/customSelect/customSelect";
import { ErrorMessage } from "formik";
import Select, { StylesConfig } from "react-select";
export const customStyles: StylesConfig = {
  control: (state) => ({
    borderRadius: "0.625rem",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "transparent",
    padding: "2.5px 12px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    outline: state.isFocused ? "2px solid #6B070D" : "",
  }),
  container: (provided, state) => ({
    ...provided,
    transition: "all 0.3s",
    borderRadius: "0.625rem",
    boxShadow: state.isFocused
      ? "0 0 0 2px #ffffff, 0 0 0 4px rgba(0, 0, 0, 0.2)"
      : "",
  }),
  valueContainer: (provided) => ({
    ...provided,
    display: "flex",
    padding: "0",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "rgba(107, 7, 13, 0.1)",
    borderRadius: "100px",
    cursor: "pointer",
    color: "rgba(107, 7, 13, 1)",
    padding: "5px 5px 5px 1px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "rgba(107, 7, 13, 1)",
    padding: "0",
    fontWeight: "600",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "var(--White)",
    backgroundColor: "var(--themeColor)",
    borderRadius: "100px",
    marginLeft: "10px",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "var(--White)",
      color: "var(--themeColor)",
    },
    padding: "0 2.3px",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 100,
    backgroundColor: "gray",
    borderRadius: "0",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
  }),
  menuList: (provided) => ({
    ...provided,
    color: "#ffffff",
    backgroundColor: "#6B070D",
    padding: "00",
    borderRadius: "0",
  }),
  input: (provided) => ({
    ...provided,
    color: "var(--GrayDark)",
    backgroundColor: "transparent",
    position: "absolute",
    margin: "0",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "0.875rem",
    lineHeight: " 1.0625rem",
    fontWeight: " 600",
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    textAlign: "left",
    padding: "5px 10px",
    fontSize: " 15px",
    backgroundColor: state.isFocused ? "#6B070D" : "#ffffff",
    color: state.isFocused ? "#ffffff" : "#000000",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--themeColor)",
      color: "#ffffff",
    },
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    backgroundColor: "#ffffff",
    borderRadius: "0",
    color: "#000000",
    fontWeight: " 600",
    "&:hover": {},
  }),
  placeholder: (provided) => {
    return {
      ...provided,
      color: "rgba(0, 0, 0, 0.7)",
      fontSize: " 15px",
      lineHeight: " 24px",
      fontWeight: " 600",
      letterSpacing: " 0.05em",
    };
  },
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};

const SelectComponent = (props: SelectComponentProps) => {
  const options = [{ value: "Select", label: "Select" }];

  const getValue = () => {
    if (props.options) {
      return props.selectedValue
        ? props.options?.find(
            (option: Option) => option?.value == props.selectedValue
          )
        : props.isMulti
        ? Array.isArray(props.selectedValue)
          ? props.options?.filter((option: Option) =>
              (props.selectedValue as (string | number)[])?.includes(
                option.value.toString()
              )
            )
          : null
        : props.options?.find(
            (option: Option) => option?.value == props.selectedValue
          );
    } else {
      return props.isMulti ? [] : ("" as string);
    }
  };
  return (
    <>
      <div className={`${props.parentClass ? props.parentClass : ""}`}>
        {props.label && (
          <label className="block mb-10px text-sm/18px text-left font-semibold">
            {props.label}
            {props.isCompulsory && <span className="text-red">*</span>}
          </label>
        )}
        <Select
          className={`w-full ${props.className ? props.className : ""}`}
          styles={customStyles}
          value={getValue() ? getValue() : null}
          options={props.options ? props.options : options}
          placeholder={props.placeholder ? props.placeholder : "Select"}
          onChange={(e) => {
            props.onChange ? props.onChange(e as Option | Option[]) : "";
          }}
          menuPortalTarget={document.body}
          isDisabled={props.isDisabled}
        />
        {props.name && (
          <ErrorMessage name={props.name}>
            {(msg) => (
              <div className="fm_error text-red text-sm pt-[4px] font-BinerkaDemo">
                {msg}
              </div>
            )}
          </ErrorMessage>
        )}
      </div>
    </>
  );
};

export default SelectComponent;
