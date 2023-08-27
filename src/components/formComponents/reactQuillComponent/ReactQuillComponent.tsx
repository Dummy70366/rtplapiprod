import "react-quill/dist/quill.snow.css";
import "./styles.css";

import { DefaultTFuncReturn } from "i18next";
import { ErrorMessage } from "formik";
import ReactQuill from "react-quill";

interface IReactQuillField {
  value: string;
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  name: string;
  label?: DefaultTFuncReturn | string;
  isCompulsory?: boolean;
  parentClass?: string;
  setFieldTouched?: (
    field: string,
    isTouched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => void;
}

const ReactQuillComponent = ({
  value,
  setFieldValue,
  name,
  label,
  isCompulsory,
  parentClass,
  setFieldTouched,
}: IReactQuillField) => {
  const header = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "video",
  ];

  return (
    <>
      <div className={`input-item custom-editor ${parentClass ? parentClass : ''} relative`}>
        {label && (
          <>
            <label className="block mb-10px text-sm/18px text-left font-semibold">
              {label}
              {isCompulsory && <span className="text-red">*</span>}
            </label>
          </>
        )}
        <ReactQuill
          className=""
          theme="snow"
          defaultValue={value}
          modules={header}
          onChange={(content: string) =>
            setFieldValue ? setFieldValue(name, content) : ""
          }
          formats={formats}
          onBlur={() => {
            if (setFieldTouched) setFieldTouched(name, true, true);
          }}
        />
        <ErrorMessage name={name}>
          {(msg) => (
            <div className="fm_error text-tomatoRed font-semibold text-sm pt-[2px] font-BinerkaDemo">
              {msg}
            </div>
          )}
        </ErrorMessage>
      </div>
    </>
  );
};

export default ReactQuillComponent;
