import { ChangeEvent } from "react";

interface CheckBoxProps {
  parentClass?: string;
  inputClass?: string;
  labelClass?: string;
  label?: string;
  id?: string;
  checked?: boolean;
  value?: string | number;
  name?: string;
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = (props: CheckBoxProps) => {
  return (
    <>
      <div
        className={`${
          props.parentClass ? props.parentClass : ""
        } relative flex`}
      >
        <input
          type="checkbox"
          name={props.name}
          checked={props.checked}
          value={props.value}
          className="appearance-none w-4 h-4 border-2 border-solid border-primaryRed rounded transition-all duration-300 checked:bg-primaryRed checked:bg-CheckWhite checked:bg-center checked:bg-[length:12px] cursor-pointer  active:scale-90 focus:ring-2 focus:ring-offset-2 focus:ring-primaryRed"
          id={props.id ? props.id : ""}
          onChange={props.onChangeHandler}
        />
        <label
          htmlFor={props.id ? props.id : ""}
          className={`text-sm/18px text-black/50 font-semibold max-w-[calc(100%_-_16px)] cursor-pointer pl-2 ${
            props.labelClass ? props.labelClass : ""
          }`}
        >
          {props.label}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
