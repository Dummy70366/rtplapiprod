import Modal from "@/components/modal/Modal";
import { DeleteIcon, EditIocn,SidebarHome } from "@/components/svgIcons";
import Table from "@/components/table/Table";
import {
  currentPageCount,
  currentPageSelector,
} from "@/redux/slices/paginationSlice";
import { GetCompanyListData,DeletCompany,EditCompanyData } from "@/services/companyService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUpdateCompany from "./AddUpdateCompany";
import { setCompanyData } from "@/redux/slices/companySlice";
import { useNavigate } from "react-router-dom";

const CompanyList = () => {
  const [limit, setLimit] = useState<number>(10);
  const [openModal, setOpenModal] = useState<boolean>(false); // For Add Update Client Modal
  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
  const [open, setOpen] = useState(false); // For Delete Modal
  const [loader, setLoader] = useState<boolean>(true);
  const [sort, setSorting] = useState<string>("");
  const [sortType, setSortingType] = useState<boolean>(true);
  const navigate = useNavigate();

  const [clientDataPage, setClientDataPage] = useState<{
    data: any;
    totalPage: number;
    totalCount: number;
  }>({
    data: [],
    totalPage: 0,
    totalCount: 0,
  });
  const [clientId, setClientId] = useState<string>("");
  const queryString =
  `?limit=${limit}&page=${currentPage}&sort=${
    sortType ? "asc" : "desc"
  }&sortBy=${sort}`;
  useEffect(() => {
    dispatch(currentPageCount(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchAllClient(queryString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, limit,  sort, sortType]);

  async function fetchAllClient(query: string) {
    setLoader(true);
    const response = await GetCompanyListData(query);
    if (response?.data?.data) {
      const result = response?.data?.data;
      setClientDataPage({
        data: result.data,
        totalCount: result.count,
        totalPage: result.lastPage,
      });
      dispatch(setCompanyData(result.data));
    }
    setLoader(false);
  }


  const toggleButtonChange  = ( event :any, companyID:number)=>{
    if(event.target.checked)
    {
      statusChange(companyID,true);
    }
    else
    {
      statusChange(companyID,false);
    }
  }


  const statusChange = async (companyID:any,status:any) =>{
    try {
      let data ={
        isActive:status
      }
      await EditCompanyData(data,companyID);

    } catch (error) {
      console.log("error", error);
    }
    
  }

  const handleOpenModal = (id: string) => {
    setClientId(id);
    setOpen(true);
  };

  const clientDelete = async (id: string) => {
    try {
      const response = await DeletCompany(Number(id));
      if (response?.data?.response_type === "SUCCESS") {
        await fetchAllClient(queryString);
      }
      
      setOpen(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const columnData = [
    {
      header: "Name",
      name: "Name",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
    },
    {
      header: "Contact",
      name: "contact",
      className: "",
      commonClass: "",
      option: {
        sort: true,
      },
    },
    {
      header: "email",
      name: "email",
      option: {
        sort: true,
      },
    },
    {
      header: "createdAt",
      name: "createdAt",
      className: "",
      commonClass: "",
    },
    {
      header: "isActive",
      name: "isActive",
      className: "",
      commonClass: "",
      cell: (props: { companyID: string; isActive: boolean;}) => {
        return (
          <div className="flex items-center gap-1.5">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={props.isActive} readOnly onChange={(e)=>{toggleButtonChange(e,props.companyID)}} className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        );
      },

    },
    {
      header: "Action",
      cell: (props: { companyID: string;}) => {
        return (
          <div className="flex items-center gap-1.5">
            <span
              className="w-7 h-7 inline-flex cursor-pointer items-center justify-center active:scale-90 transition-all duration-300 origin-center hover:bg-black/10 text-dark p-1 rounded active:ring-2 active:ring-current active:ring-offset-2"
              onClick={() => {
                setClientId(props.companyID);
                setOpenModal(true);
              }}
            >
              <EditIocn className="w-ful h-full pointer-events-none" />
            </span>
            <span
              className="w-7 h-7 inline-flex cursor-pointer items-center justify-center active:scale-90 transition-all duration-300 origin-center hover:bg-black/10 text-dark p-1 rounded active:ring-2 active:ring-current active:ring-offset-2"
              onClick={() => {
                navigate('/admin/company/office/'+props.companyID);
              }}
            >
              <SidebarHome className="w-ful h-full pointer-events-none" />
            </span>
            <span
              className="w-7 h-7 inline-flex cursor-pointer items-center justify-center active:scale-90 transition-all duration-300 origin-center hover:bg-red/10 text-red p-1 rounded active:ring-2 active:ring-current active:ring-offset-2"
              onClick={() => handleOpenModal(props.companyID)}
            >
              <DeleteIcon className="w-ful h-full pointer-events-none" />
            </span>
          </div>
        );
      },
    },
  ];


  return (
    <>
    <Table
      headerData={columnData}
      bodyData={clientDataPage.data}
      isButton={true}
      buttonText="Add Company"
      buttonClick={() => {
        setClientId("");
        setOpenModal(true);
      }}
      loader={loader}
      pagination={true}
      dataPerPage={limit}
      setLimit={setLimit}
      currentPage={currentPage}
      totalPage={clientDataPage.totalPage}
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
        onClickHandler={() => clientDelete(clientId)}
        confirmationText="Are you sure you want to delete this Company?"
        title="Delete"
      >
        <div className=""></div>
      </Modal>
    )}
    {openModal && (
      <AddUpdateCompany
        id={clientId}
        openModal={openModal}
        setOpenModal={setOpenModal}
        fetchAllData={() => {
          fetchAllClient(queryString);
        }}
      />
    )}
  </>
  );
};

export default CompanyList;
