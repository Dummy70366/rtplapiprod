import { InputCalendarIcon } from "@/components/svgIcons";
import { DefaultTFuncReturn } from "i18next";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";

interface DateProps {
  parentClass?: string;
  label?: DefaultTFuncReturn | string;
  name: string;
  placeholder?: string | DefaultTFuncReturn;
  className?: string;
  isCompulsory?: boolean;
  smallFiled?: boolean;
  value?: Date | null;
  minDate?: Date;
  maxDate?: Date;
  onChange?: (date: Date | null) => void;
  dateFormat?: string;
}

const DateComponent = (props: DateProps) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    props.value && setStartDate(props.value);
  }, [props.value]);
  return (
    <>
      <div className={`${props.parentClass ? props.parentClass : ""} relative`}>
        <label className="block mb-10px text-sm/18px text-left font-semibold">
          {props.label}
          {props.isCompulsory && <span className="text-red">*</span>}
        </label>
        <div className="relative ReactDatePickerMianWrapper">
          <ReactDatePicker
            dateFormat={props.dateFormat}
            maxDate={props.maxDate ? props.maxDate : undefined}
            name={props.name}
            className={`
            ${props.className ? props.className : ""}
            ${props.smallFiled ? "py-11px px-15px" : " py-4 px-5"}
            text-sm/18px text-black placeholder:text-black/50 w-full border border-solid border-customGray/20 rounded-lg transition-all duration-300  focus:ring-2 focus:ring-customGray/30 focus:ring-offset-2
            `}
            minDate={props.minDate ? props.minDate : undefined}
            selected={startDate}
            onChange={(date) => {
              date && setStartDate(date);
              props.onChange ? props.onChange(date as Date | null) : "";
            }}
          />
          <span className="inline-block w-18px h-18px text-black/40 pointer-events-none top-1/2 -translate-y-1/2 absolute right-3">
            <InputCalendarIcon className="w-full h-full" />
          </span>
        </div>
      </div>
    </>
  );
};

export default DateComponent;
