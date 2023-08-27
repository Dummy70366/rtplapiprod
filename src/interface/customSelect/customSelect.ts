export interface Option {
  label: string;
  value: number | string;
}

export interface GroupOption {
  label: string;
  options: Option[];
}

export interface SelectComponentProps {
  parentClass?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  name?: string;
  selectedValue?: string | number | (string | number)[] | null;
  options: Option[];
  onChange?: (option: Option | Option[]) => void;
  labelClass?: string;
  isCompulsory?: boolean;
  isMulti?: boolean;
  isDisabled?: boolean;
}

export interface GroupSelectComponentProps {
  parentClass?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  name?: string;
  selectedValue?: string | number | (string | number)[] | null;
  options: GroupOption[];
  onChange?: (option: Option) => void;
  labelClass?: string;
  isCompulsory?: boolean;
  isMulti?: boolean;
}

export interface ICustomSelect {
  inputClass: string;
  isMulti: boolean;
  isUseFocus: boolean;
  label?: string;
  labelClass?: string;
  name: string;
  options: Option[];
  placeholder?: string;
  selectedValue?: string;
  isCompulsory?: boolean;
  Margin?: string;
  Width?: string;
  onChange?: (option: Option | Option[]) => void;
  disabled?: boolean;
  setOption?: any;
  variant?: "1" | "2" | "3";
  isSearchable?: boolean;
  isClearable?: boolean;
  typeAdd?: string;
}
