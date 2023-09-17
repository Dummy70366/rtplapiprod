import Modal from "@/components/modal/Modal";
import { DeleteIcon, EditIocn, IconEye } from "@/components/svgIcons";
import Table from "@/components/table/Table";
import {
  currentPageCount,
  currentPageSelector,
} from "@/redux/slices/paginationSlice";
import {
  GetAllVisitor,
  DeleteVisitor,
  EditVisitorData,
} from "@/services/visitorService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import AddUpdateCompany from "./AddUpdateCompany";
import { setVisitorData } from "@/redux/slices/visitorSlice";
import { useNavigate } from "react-router-dom";

const StaffVisitorList = () => {
  const [limit, setLimit] = useState<number>(10);
  const [openModal, setOpenModal] = useState<boolean>(false); // For Add Update Company Modal
  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
  const [open, setOpen] = useState(false); // For Delete Modal
  const [loader, setLoader] = useState<boolean>(true);
  const [sort, setSorting] = useState<string>("");
  const [sortType, setSortingType] = useState<boolean>(true);
  const navigate = useNavigate();

  const [companyDataPage, setCompanyDataPage] = useState<{
    data: any;
    totalPage: number;
    totalCount: number;
  }>({
    data: [],
    totalPage: 0,
    totalCount: 0,
  });
  const [companyId, setCompanyId] = useState<string>("");
  const queryString = `?limit=${limit}&page=${currentPage}&sort=${
    sortType ? "asc" : "desc"
  }&sortBy=${sort}`;
  useEffect(() => {
    dispatch(currentPageCount(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchAllVisitors(queryString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, limit, sort, sortType]);

  async function fetchAllVisitors(query: string) {
    setLoader(true);
    const response = await GetAllVisitor(query);
    if (response?.data?.responseData) {
      const result = response?.data?.responseData;
      setCompanyDataPage({
        data: result.data,
        totalCount: result.count,
        totalPage: result.lastPage,
      });
      dispatch(setVisitorData(result.data));
    }
    setLoader(false);
  }

  const toggleButtonChange = (event: any, companyID: any) => {
    if (event.target.checked) {
      statusChange(companyID, true);
    } else {
      statusChange(companyID, false);
    }
  };

  const statusChange = async (companyID: any, status: any) => {
    try {
      let data = {
        isActive: status,
      };
      await EditVisitorData(data, companyID);
    } catch (error) {
      console.log("error", error);
    }
  };

  const columnData = [
    {
      header: "Token Number",
      name: "TokenNumber",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
    },
    {
      header: "Purpose",
      name: "purposeOfMeeting",
      option: {
        sort: true,
      },
    },
    {
      header: "Status",
      name: "ReqStatus",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
      cell: (props: any) => {
        return (
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-bold text-white-800 ring-1 ring-inset ring-gray-500/10">
            {props.ReqStatus}
          </span>
        );
      },
    },
    {
      header: "Action",
      cell: (props: any) => {
        return (
          <div className="flex items-center gap-1.5">
            {/* <span
              className="w-7 h-7 inline-flex cursor-pointer items-center justify-center active:scale-90 transition-all duration-300 origin-center hover:bg-black/10 text-dark p-1 rounded active:ring-2 active:ring-current active:ring-offset-2"
              onClick={() => {
                setCompanyId(props.companyID);
                setOpenModal(true);
              }}
            >
              <EditIocn className="w-ful h-full pointer-events-none" />
            </span> */}
            <span
              className="w-7 h-7 inline-flex cursor-pointer items-center justify-center active:scale-90 transition-all duration-300 origin-center hover:bg-black/10 text-dark p-1 rounded active:ring-2 active:ring-current active:ring-offset-2"
              onClick={() => {
                navigate("/admin/visitor/details/" + props.TokenNumber);
              }}
            >
              <IconEye className="w-ful h-full pointer-events-none" />
            </span>
            {/* <span
              className="w-7 h-7 inline-flex cursor-pointer items-center justify-center active:scale-90 transition-all duration-300 origin-center hover:bg-red/10 text-red p-1 rounded active:ring-2 active:ring-current active:ring-offset-2"
              onClick={() => handleOpenModal(props.companyID)}
            >
              <DeleteIcon className="w-ful h-full pointer-events-none" />
            </span> */}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        headerData={columnData}
        bodyData={companyDataPage.data}
        loader={loader}
        pagination={true}
        dataPerPage={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        totalPage={companyDataPage.totalPage}
        setSorting={setSorting}
        sortType={sortType}
        setSortingType={setSortingType}
      />
      {/* {open && (
        <Modal
          variant={"Confirmation"}
          closeModal={() => setOpen(!open)}
          width="max-w-[475px]"
          icon={<DeleteIcon className="w-full h-full mx-auto" />}
          okbtnText="Yes"
          cancelbtnText="No"
          onClickHandler={() => companyDelete(companyId)}
          confirmationText="Are you sure you want to delete this Company?"
          title="Delete"
        >
          <div className=""></div>
        </Modal>
      )} */}
      {/* {openModal && (
        <AddUpdateCompany
          id={companyId}
          openModal={openModal}
          setOpenModal={setOpenModal}
          fetchAllData={() => {
            fetchAllVisitors(queryString);
          }}
        />
      )} */}
    </>
  );
};

export default StaffVisitorList;
