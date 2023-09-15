import Modal from "@/components/modal/Modal";
import {
  DeleteIcon,
  EditIocn,
  IconEye,
  LeftArrowIcon,
} from "@/components/svgIcons";
import Card from "@/components/card/Card";

// import {
//   currentPageCount,
//   currentPageSelector,
// } from "@/redux/slices/paginationSlice";
import { GetVisitorDetailsByToken } from "@/services/visitorService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const StaffVisitorDetails = () => {
  const { token } = useParams();
  const [openModal, setOpenModal] = useState<boolean>(false); // For Add Update Department Modal
  const [visitorDetails, setVisitorDetails] = useState<any>({}); // For Add Update Department Modal
  const dispatch = useDispatch();
  const [loader, setLoader] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      fetchVisitorDetails(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchVisitorDetails(token: string) {
    setLoader(true);
    const response = await GetVisitorDetailsByToken(token);
    if (response?.data?.responseData) {
      const result = response?.data?.responseData;
      console.log(result.data);
      setVisitorDetails(result.data);
      // setDepartmentDataPage({
      //   data: result.data,
      //   totalCount: result.count,
      //   totalPage: result.lastPage,
      // });
    }
    setLoader(false);
  }

  return (
    <>
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() => navigate("/admin/visitor")}
      >
        <LeftArrowIcon className="w-ful h-full pointer-events-none" />
      </button>
      {visitorDetails.length > 0 && (
        <div className="my-3 grid grid-cols-2 gap-5">
          <Card
            title="Request Details"
            parentClass="rounded-xl bg-white col-span-1"
          >
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-bold leading-6 text-gray-900">
                  Token Number
                </dt>
                <dd className="mt-1 text-base leading-900 font-normal	 sm:col-span-2 sm:mt-0">
                  {visitorDetails.TokenNumber}
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-bold leading-6 text-gray-900">
                  Contact Person Name
                </dt>
                <dd className="mt-1 text-base leading-900 font-normal	 sm:col-span-2 sm:mt-0">
                  {"vContactPersonName"}
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-bold leading-6 text-gray-900">
                  Purpose Of Meeting
                </dt>
                <dd className="mt-1 text-base leading-900 font-normal	 sm:col-span-2 sm:mt-0">
                  {visitorDetails.purposeOfMeeting}
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-bold leading-6 text-gray-900">
                  Requested Date
                </dt>
                <dd className="mt-1 text-base leading-6 text-gray-900 font-normal	 sm:col-span-2 sm:mt-0">
                  {visitorDetails.createdAt}
                </dd>
              </div>
            </dl>
          </Card>

          <Card
            title="Visitor Company Details"
            parentClass="rounded-xl bg-white col-span-1"
          >
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-bold leading-6 text-gray-900">
                  Company Name
                </dt>
                <dd className="mt-1 text-base leading-900 font-normal	 sm:col-span-2 sm:mt-0">
                  {""}
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-bold leading-6 text-gray-900">
                  Company Address
                </dt>
                <dd className="mt-1 text-base leading-900 font-normal	 sm:col-span-2 sm:mt-0">
                  {"vCompanyAddress"}
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-bold leading-6 text-gray-900">
                  Company Contact
                </dt>
                <dd className="mt-1 text-base leading-900 font-normal	 sm:col-span-2 sm:mt-0">
                  {"vCompanyContact"}
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-base font-bold leading-6 text-gray-900">
                  Company Email
                </dt>
                <dd className="mt-1 text-base leading-6 text-gray-900 font-normal	 sm:col-span-2 sm:mt-0">
                  {".vCompanyEmail"}
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      )}
      <button
        type="button"
        className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Extra large
      </button>
    </>
  );
};

export default StaffVisitorDetails;
