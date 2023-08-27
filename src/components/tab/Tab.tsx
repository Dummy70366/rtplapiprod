import { useState } from "react";

const TabList = [
  {
    name: "Active",
    value: 1,
  },
  {
    name: "Archived",
    value: 0,
  },
  {
    name: "All",
    value: -1,
  },
];

const Tab = ({ setTab }: { setTab?: (value: number) => void }) => {
  const [selectTab, setSelectTab] = useState("tab2");
  return (
    <>
      <div className="tab-wrap">
        <ul className="flex items-center">
          {TabList.map((e, i) => (
            <li className="mr-35px last:mr-0" key={i}>
              <span
                className={`inline-block font-semibold cursor-pointer border-b-2 border-solid border-transparent pb-0.5 transition-all duration-300 text-lg/22px ${
                  selectTab === `tab${i}`
                    ? " border-b-primaryRed text-primaryRed "
                    : " hover:border-b-black/50 text-black/50"
                }`}
                onClick={() => {
                  setTab && setTab(e.value);
                  setSelectTab(`tab${i}`);
                }}
              >
                {e.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tab;
