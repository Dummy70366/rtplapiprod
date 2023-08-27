import { CrossIcon } from "@/components/svgIcons";
import { VITE_APP_API_URL } from "@/config";
import { ErrorMessage } from "formik";

import {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

interface FileInputProps {
  acceptTypes?: string;
  parentClass?: string;
  setValue: (
    field: string,
    value: (string | File)[] | File | null,
    shouldValidate?: boolean
  ) => void;
  name: string;
  isMulti?: boolean;
  value: File | string | Array<File | string> | null;
  label?: string;
}
const FileInput = ({
  parentClass,
  setValue,
  name,
  isMulti = false,
  value,
  label,
  acceptTypes,
}: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <div className={`relative ${parentClass ? parentClass : ""}`}>
        <div className="inner relative">
          {label && (
            <label className="block mb-10px text-sm/18px text-left font-semibold">
              {label}
            </label>
          )}
          <input
            type="file"
            ref={inputRef}
            id="inputFile"
            accept={acceptTypes}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              if (
                isMulti === false &&
                event.target.files &&
                event.target.files[0]
              ) {
                setValue(name, event.target.files[0]);
              }
            }}
            hidden
          />
          <label
            htmlFor="inputFile"
            className="flex items-center justify-center w-full h-16 bg-white border border-dashed border-black/30 rounded-md cursor-pointer active:scale-95 transition-all duration-300"
          >
            <span className="inline-block text-base/5 font-semibold pointer-events-none">
              Select file
            </span>
          </label>
        </div>

        <div className="grid gap-3 mt-4">
          {value && (
            <FileList
              value={value as File | string}
              name={name}
              setValue={setValue}
              ref={inputRef}
            />
          )}
          <ErrorMessage name={name}>
            {(msg) => (
              <div className="fm_error text-red text-sm pt-[2px] font-BinerkaDemo">
                {msg}
              </div>
            )}
          </ErrorMessage>
          {/* <div className="flex w-full items-center border-b border-solid border-black/05 pb-3 last:border-none last:pb-0">
            <div className="relative w-14 h-14 bg-white rounded-md">
              <img
                src="./assets/images/lred-auth-img.png"
                className=" rounded-md w-full h-full object-contain"
                width={"80"}
                height={"80"}
                alt=""
              />
            </div>
            <p className="text-sm/5 font-semibold max-w-[calc(100%_-_100px)] w-full mx-auto">
              Lorem ipsum dolor sit amet.
            </p>
            <span className="icon ml-auto select-none inline-block w-5 h-5 bg-red hover:bg-tomatoRed text-white p-1.5 rounded-full cursor-pointer">
              <CrossIcon className="w-full h-full" />
            </span>
          </div>
          <div className="flex w-full items-center border-b border-solid border-black/05 pb-3 last:border-none last:pb-0">
            <div className="relative w-14 h-14 bg-white rounded-md">
              <img
                src="./assets/images/lred-auth-img.png"
                className=" rounded-md w-full h-full object-contain"
                width={"80"}
                height={"80"}
                alt=""
              />
            </div>
            <p className="text-sm/5 font-semibold max-w-[calc(100%_-_100px)] w-full mx-auto">
              Lorem ipsum dolor sit amet.
            </p>
            <span className="icon ml-auto select-none inline-block w-5 h-5 bg-red hover:bg-tomatoRed text-white p-1.5 rounded-full cursor-pointer">
              <CrossIcon className="w-full h-full" />
            </span>
          </div> */}
          {/* <div className="flex w-full items-center border-b border-solid border-black/05 pb-3 last:border-none last:pb-0">
            <div className="relative w-14 h-14 bg-white rounded-md">
              <PDFIcon className="w-full h-full p-2 text-black/70" />
            </div>
            <p className="text-sm/5 font-semibold max-w-[calc(100%_-_100px)] w-full mx-auto">
              Lorem ipsum dolor sit amet.
            </p>
            <span className="icon ml-auto select-none inline-block w-5 h-5 bg-red hover:bg-tomatoRed text-white p-1.5 rounded-full cursor-pointer">
              <CrossIcon className="w-full h-full" />
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export const FileList = ({
  value,
  name,
  setValue,
  ref,
}: {
  value: File | string;
  name: string;
  setValue: (
    field: string,
    value: (string | File)[] | File | null,
    shouldValidate?: boolean
  ) => void;
  ref?: MutableRefObject<HTMLInputElement | null>;
}) => {
  const [source, setSource] = useState<string>();

  const removeFile = () => {
    if (ref?.current) ref.current.value = "";
    setValue(name, null);
  };

  useEffect(() => {
    if (typeof value === "string") {
      setSource(VITE_APP_API_URL + value);
    } else {
      setSource(window?.URL?.createObjectURL(value));
    }
  }, [value]);
  return (
    <div className="flex w-full items-center border-b border-solid border-black/05 pb-3 last:border-none last:pb-0">
      <div className="relative w-14 h-14 bg-white rounded-md">
        <img
          src={source}
          className=" rounded-md w-full h-full object-contain"
          width={"80"}
          height={"80"}
          alt=""
        />
      </div>
      <p className="text-sm/5 font-semibold max-w-[calc(100%_-_100px)] w-full mx-auto"></p>
      <span
        className="icon ml-auto select-none inline-block w-5 h-5 bg-red hover:bg-tomatoRed text-white p-1.5 rounded-full cursor-pointer"
        onClick={() => removeFile()}
      >
        <CrossIcon className="w-full h-full" />
      </span>
    </div>
  );
};

export default FileInput;
