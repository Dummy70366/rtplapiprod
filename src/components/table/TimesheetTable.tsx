import { Link } from "react-router-dom";
import Button from "../formComponents/button/Button";
import SelectComponent from "../formComponents/customSelect/Select";
import DateRange from "../formComponents/dateRange/DateRange";
import SearchBar from "../searchbar/SearchBar";
import { CloudDownIocn, PlusIcon } from "../svgIcons";
import Tab from "../tab/Tab";
import Modal from "../modal/Modal";
import { useState } from "react";
import Card from "../card/Card";

interface TimesheetTable {
  loader?: boolean;
  isButton?: boolean;
  buttonLink?: string;
  buttonText?: string;
}

const TimesheetTable = (props: TimesheetTable) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="">
        <div className="flex justify-between mb-4">
          <div className="flex flex-wrap 1400:flex-nowrap gap-4 items-center">
            <SelectComponent
              parentClass="1300:w-[200px] 1400:w-[270px] 1700:w-[340px]"
              options={[]}
            />
            <Tab />
            <DateRange className="max-w-[147px]" />
          </div>
          <div className="flex flex-wrap 1400:flex-nowrap gap-4">
            <SearchBar inputClass="w-[300px]" />
            <Button
              variant={"gray"}
              parentClass=""
              icon={<CloudDownIocn className="w-4 h-4" />}
            >
              Export to Excel
            </Button>
            {props.isButton && (
              <Link to={props.buttonLink ? props.buttonLink : "#"}>
                <Button variant={"primary"} parentClass="" icon={<PlusIcon />}>
                  {props.buttonText ? props.buttonText : ""}
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="table-wrapper overflow-auto">
          <table className="w-full timesheet-table">
            <thead>
              <tr>
                <th>
                  <span>Employee</span>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">1</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Mon
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">2</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Tue
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">3</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Wed
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">4</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Thu
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">5</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Fri
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">6</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Sat
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">7</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Sun
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">8</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Mon
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">9</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Tue
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">10</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Wed
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">11</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Thu
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">12</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Fri
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">13</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Sat
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">14</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Sun
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">15</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Mon
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">16</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Tue
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">17</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Wed
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">18</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Thu
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">19</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Fri
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">20</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Sat
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">21</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Sun
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">22</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Mon
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">23</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Tue
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">24</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Wed
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">25</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Thu
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">26</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Fri
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">27</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Sat
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">28</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Sun
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">29</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Mon
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">30</span>
                    <span className="block text-center text-xs/4 font-medium">
                      Tue
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">P</span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">CR</span>
                  </p>
                </th>
                <th>
                  <p>
                    <span className="block text-center text-13px/4">Total</span>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center">
                    <div className="w-30px h-30px">
                      <img
                        src="https://via.placeholder.com/30x30"
                        width={30}
                        height={30}
                        className="rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="pl-10px">
                      <p className="text-sm/18px text-black">
                        Benikhlef Ikhlef
                      </p>
                      <span className="text-xs/4 text-black/50">Tooooo1</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    31
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    0
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    31
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center">
                    <div className="w-30px h-30px">
                      <img
                        src="https://via.placeholder.com/30x30"
                        width={30}
                        height={30}
                        className="rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="pl-10px">
                      <p className="text-sm/18px text-black">
                        Benikhlef Ikhlef
                      </p>
                      <span className="text-xs/4 text-black/50">Tooooo1</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    P
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    31
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    0
                  </span>
                </td>
                <td>
                  <span className="text-15px/18px text-black/50 text-center block">
                    31
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <span
        className="inline-block px-3 py-2 bg-primaryRed text-white rounded-lg mt-4 cursor-pointer"
        onClick={() => setModal(!modal)}
      >
        Open Modal
      </span>
      {modal && (
        <Modal
          title="Update Timesheet"
          width="max-w-[709px]"
          closeModal={() => setModal(!modal)}
        >
          <>
            <div className="p-6 bg-primaryRed/5 rounded-10 flex justify-between items-center mb-5 last:mb-0">
              <div className="flex items-center">
                <div className="w-50px h-50px">
                  <img
                    src="https://via.placeholder.com/50x50"
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt=""
                  />
                </div>
                <div className="pl-10px">
                  <p className="text-sm/18px text-black">Benikhlef Ikhlef</p>
                  <span className="text-xs/4 text-black/50">Tooooo1</span>
                </div>
              </div>
              <p className="text-lg/6 text-black font-semibold">
                1 / 06 / 2023
              </p>
            </div>

            <Card title="Titre de Congé Dates" parentClass="mb-5 last:mb-0">
              <DateRange />
            </Card>

            <Card title="Types" parentClass="mb-5 last:mb-0">
              <SelectComponent
                isMulti={true}
                options={[]}
                // parentClass="col-span-2"
                placeholder="Select"
                label="Select Types"
                // isCompulsory
                className="bg-white"
              />
            </Card>
          </>
        </Modal>
      )}
    </>
  );
};

export default TimesheetTable;
