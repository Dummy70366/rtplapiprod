import Modal from "@/components/modal/Modal";
import { DeleteIcon, EditIocn, IconEye } from "@/components/svgIcons";
import Table from "@/components/table/Table";
import MeetingForm from "@/components/meetingForm/MeetingForm";
import { Link } from "react-router-dom";

import {
  currentPageCount,
  currentPageSelector,
} from "@/redux/slices/paginationSlice";
import {
  GetCompanyListData,
  DeletCompany,
  EditCompanyData,
} from "@/services/companyService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyData } from "@/redux/slices/companySlice";
import { useNavigate } from "react-router-dom";

const VisitorRegister = () => {
  const [limit, setLimit] = useState<number>(10);
  const [openModal, setOpenModal] = useState<boolean>(false); // For Add Update Company Modal
  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
  const [open, setOpen] = useState(false); // For Delete Modal
  const [loader, setLoader] = useState<boolean>(true);
  const [sort, setSorting] = useState<string>("");
  const [sortType, setSortingType] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleOpenModal = (id: string) => {
    // setCompanyId(id);
    // setOpen(true);
  };

  return (
    <>
      <div>
        <>
          <div className="min-h-dvh bg-offWhite p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-50px flex 1200:items-center">
            <div className="max-w-[1545px] mx-auto w-full">
              <div className="flex flex-wrap justify-between">
                {/* <div className="auth-box-wrap xl:max-w-[600px] 2xl:max-w-[720px]  w-full "> */}
                <div className="auth-box-wrap  w-full overflow-scroll">
                  <div className="bg-white w-full py-8 xl:py-12 2xl:py-16 rounded-15">
                    <div className=" mx-auto text-center">
                      <div className="logo mb-5">
                        <img
                          src="/assets/images/riseglow-removebg-preview.png"
                          className="mx-auto max-w-[159px]"
                          width={159}
                          height={57}
                          alt=""
                        />
                      </div>
                      <p className="text-30px mb-4">
                        Visitor Registration to Rise and Glow Portal
                      </p>

                      <div className="input-list-wrapper mt-10 text-left">
                        <MeetingForm
                          isAddNew={false}
                          // visitorCount = {5}
                        />
                      </div>
                    </div>
                    <div className="modal-footer py-5 px-2 border-t border-primaryBlack1/20">
                      <p className="text-center font-BinerkaDemo text-base">
                        <span className="inline-block text-primaryBlack1">
                          Employee Login ?
                        </span>
                        <Link to="/login">
                          <span className="inline-block cursor-pointer text-inputBorder ms-1 text-primaryRed hover:underline ">
                            Login
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default VisitorRegister;
