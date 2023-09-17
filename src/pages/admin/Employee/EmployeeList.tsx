import Modal from "@/components/modal/Modal";
import { DeleteIcon, EditIocn, IconEye } from "@/components/svgIcons";
import Table from "@/components/table/Table";
import { userSelector } from "@/redux/slices/userSlice";
import {
  currentPageCount,
  currentPageSelector,
} from "@/redux/slices/paginationSlice";
import {
  GetAllEmployee,
  DeleteEmployee,
  EditEmployeeData,
} from "@/services/employeeService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUpdateEmployee from "./AddUpdateEmployee";
import { setEmployeeData } from "@/redux/slices/employeeSlice";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [limit, setLimit] = useState<number>(10);
  const [openModal, setOpenModal] = useState<boolean>(false); // For Add Update Employee Modal
  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
  const user = useSelector(userSelector);
  const [open, setOpen] = useState(false); // For Delete Modal
  const [loader, setLoader] = useState<boolean>(true);
  const [sort, setSorting] = useState<string>("");
  const [sortType, setSortingType] = useState<boolean>(true);
  const navigate = useNavigate();

  const [employeeDataPage, setEmployeeDataPage] = useState<{
    data: any;
    totalPage: number;
    totalCount: number;
  }>({
    data: [],
    totalPage: 0,
    totalCount: 0,
  });
  const [employeeId, setEmployeeId] = useState<string>("");
  const queryString = `?limit=${limit}&page=${currentPage}&sort=${
    sortType ? "asc" : "desc"
  }&sortBy=${sort}`;
  useEffect(() => {
    dispatch(currentPageCount(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchAllEmployee(queryString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, limit, sort, sortType]);

  async function fetchAllEmployee(query: string) {
    setLoader(true);
    const response = await GetAllEmployee(query);
    if (response?.data?.responseData) {
      const result = response?.data?.responseData;
      setEmployeeDataPage({
        data: result.data,
        totalCount: result.count,
        totalPage: result.lastPage,
      });
      dispatch(setEmployeeData(result.data));
    }
    setLoader(false);
  }

  const toggleButtonChange = (event: any, empID: any) => {
    if (event.target.checked) {
      statusChange(empID, true);
    } else {
      statusChange(empID, false);
    }
  };

  const statusChange = async (empID: any, status: any) => {
    try {
      let data = {
        isActive: status,
      };
      await EditEmployeeData(data, empID);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOpenModal = (id: string) => {
    setEmployeeId(id);
    setOpen(true);
  };

  const employeeDelete = async (id: string) => {
    try {
      const response = await DeleteEmployee(Number(id));
      if (response?.data?.response_type === "SUCCESS") {
        await fetchAllEmployee(queryString);
      }

      setOpen(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const columnData = [
    {
      header: "Code",
      name: "empCode",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
    },
    {
      header: "Company",
      name: "Company",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
      cell: (props: { company: any }) => {
        return props.company.Name;
      },
    },
    {
      header: "Name",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
      cell: (props: { firstName: string; lastName: string }) => {
        return props.firstName + " " + props.lastName;
      },
    },
    {
      header: "Email",
      name: "email",
      option: {
        sort: true,
      },
    },
    {
      header: "Phone",
      name: "phone",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
    },
    {
      header: "Designation",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
      cell: (props: { designation: any }) => {
        return props.designation.designation;
      },
    },
    {
      header: "Role",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
      cell: (props: { role: any }) => {
        return props.role.role;
      },
    },

    {
      header: "isActive",
      className: "",
      commonClass: "",
      cell: (props: { empID: string; isActive: boolean }) => {
        let readonly = true;
        if (user.empID == props.empID) readonly = false;
        return (
          <div className="flex items-center gap-1.5">
            <label className="relative inline-flex items-center cursor-pointer">
              {readonly ? (
                <input
                  type="checkbox"
                  defaultChecked={props.isActive}
                  readOnly
                  onChange={(e) => {
                    toggleButtonChange(e, props.empID);
                  }}
                  className="sr-only peer"
                />
              ) : (
                <input
                  type="checkbox"
                  checked={props.isActive}
                  readOnly
                  className="sr-only peer"
                />
              )}

              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        );
      },
    },
    {
      header: "Action",
      cell: (props: { empID: string }) => {
        if (user.empID != props.empID)
          return (
            <div className="flex items-center gap-1.5">
              <span
                className="w-7 h-7 inline-flex cursor-pointer items-center justify-center active:scale-90 transition-all duration-300 origin-center hover:bg-black/10 text-dark p-1 rounded active:ring-2 active:ring-current active:ring-offset-2"
                onClick={() => {
                  setEmployeeId(props.empID);
                  setOpenModal(true);
                }}
              >
                <EditIocn className="w-ful h-full pointer-events-none" />
              </span>

              <span
                className="w-7 h-7 inline-flex cursor-pointer items-center justify-center active:scale-90 transition-all duration-300 origin-center hover:bg-red/10 text-red p-1 rounded active:ring-2 active:ring-current active:ring-offset-2"
                onClick={() => handleOpenModal(props.empID)}
              >
                <DeleteIcon className="w-ful h-full pointer-events-none" />
              </span>
            </div>
          );
        else {
          return <></>;
        }
      },
    },
  ];

  return (
    <>
      <Table
        headerData={columnData}
        bodyData={employeeDataPage.data}
        isButton={true}
        buttonText="Add Employee"
        buttonClick={() => {
          setEmployeeId("");
          setOpenModal(true);
        }}
        loader={loader}
        pagination={true}
        dataPerPage={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        totalPage={employeeDataPage.totalPage}
        setSorting={setSorting}
        sortType={sortType}
        setSortingType={setSortingType}
      />
      {open && (
        <Modal
          variant={"Confirmation"}
          closeModal={() => setOpen(!open)}
          width="max-w-[475px]"
          icon={<DeleteIcon className="w-full h-full mx-auto" />}
          okbtnText="Yes"
          cancelbtnText="No"
          onClickHandler={() => employeeDelete(employeeId)}
          confirmationText="Are you sure you want to delete this Employee?"
          title="Delete"
        >
          <div className=""></div>
        </Modal>
      )}
      {openModal && (
        <AddUpdateEmployee
          id={employeeId}
          openModal={openModal}
          setOpenModal={setOpenModal}
          fetchAllData={() => {
            fetchAllEmployee(queryString);
          }}
        />
      )}
    </>
  );
};

export default EmployeeList;
