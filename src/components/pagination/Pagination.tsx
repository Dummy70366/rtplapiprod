import { useEffect, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../svgIcons";
import { useDispatch } from "react-redux";
import { currentPageCount } from "@/redux/slices/paginationSlice";
import { transportSummaryEnum } from "@/enum/transport";
import {
  transportCapacityCurrentPageCount,
  transportModelCurrentPageCount,
  transportPositionCurrentPageCount,
  transportTypeCurrentPageCount,
} from "@/redux/slices/summaryPaginationSlice";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  dataPerPage: number;
  parentClass?: string;
  setLimit: (number: number) => void;
  summaryTableType?: transportSummaryEnum;
}
const Pagination = ({
  parentClass,
  currentPage,
  totalPages,
  dataPerPage,
  setLimit,
  summaryTableType,
}: PaginationProps) => {
  const dispatch = useDispatch();
  const [defaultPerPageData, setDefaultPerPageData] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number[]>([]);

  function generatePaginationNumbers(
    tpage: number, // Total Page
    cpage: number, // Current Page
    dpages: number // Limit ( Per Page Data)
  ) {
    const paginationNumbers = [];
    let startPage = Math.max(1, cpage - Math.floor(dpages / 2));
    const endPage = Math.min(startPage + dpages - 1, tpage);

    if (cpage > endPage) {
      dispatch(currentPageCount(endPage));
    }
    while (startPage <= endPage) {
      paginationNumbers.push(startPage);
      startPage++;
    }

    return paginationNumbers;
  }

  useEffect(() => {
    setPageNumber(
      generatePaginationNumbers(totalPages, currentPage, dataPerPage)
    );
    setDefaultPerPageData(dataPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, totalPages]);

  const handlePageChange = (value: number, action?: string) => {
    if (summaryTableType === transportSummaryEnum.Model) {
      if (action === "" || action === null || action === undefined) {
        dispatch(transportModelCurrentPageCount(value));
      } else {
        action === "increment"
          ? dispatch(transportModelCurrentPageCount(value + 1))
          : dispatch(transportModelCurrentPageCount(value - 1));
      }
    } else if (summaryTableType === transportSummaryEnum.Type) {
      if (action === "" || action === null || action === undefined) {
        dispatch(transportTypeCurrentPageCount(value));
      } else {
        action === "increment"
          ? dispatch(transportTypeCurrentPageCount(value + 1))
          : dispatch(transportTypeCurrentPageCount(value - 1));
      }
    } else if (summaryTableType === transportSummaryEnum.Position) {
      if (action === "" || action === null || action === undefined) {
        dispatch(transportPositionCurrentPageCount(value));
      } else {
        action === "increment"
          ? dispatch(transportPositionCurrentPageCount(value + 1))
          : dispatch(transportPositionCurrentPageCount(value - 1));
      }
    } else if (summaryTableType === transportSummaryEnum.Capacity) {
      if (action === "" || action === null || action === undefined) {
        dispatch(transportCapacityCurrentPageCount(value));
      } else {
        action === "increment"
          ? dispatch(transportCapacityCurrentPageCount(value + 1))
          : dispatch(transportCapacityCurrentPageCount(value - 1));
      }
    } else {
      if (action === "" || action === null || action === undefined) {
        dispatch(currentPageCount(value));
      } else {
        action === "increment"
          ? dispatch(currentPageCount(value + 1))
          : dispatch(currentPageCount(value - 1));
      }
    }
  };

  return (
    <>
      <div className={`${parentClass ? parentClass : ""} mt-9`}>
        <div className="flex gap-50px justify-end">
          {totalPages >= 1 && (
            <ul className="flex gap-1">
              <li className="first:mr-2 last:ml-2">
                <span
                  className={`inline-flex items-center justify-center w-30px h-30px text-black/50 ${
                    currentPage > 1 ? "cursor-pointer hover:bg-black/10" : ""
                  } rounded-md transition-all duration-300 select-none active:scale-90 p-2`}
                  onClick={() =>
                    currentPage > 1 &&
                    handlePageChange(currentPage, "decrement")
                  }
                >
                  <LeftArrowIcon className="w-full h-full" />
                </span>
              </li>
              {pageNumber &&
                pageNumber.length &&
                pageNumber.map((num: number) => {
                  return (
                    <li
                      className="first:mr-2 last:ml-2"
                      onClick={() => handlePageChange(num)}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-30px h-30px ${
                          num === currentPage
                            ? "text-white bg-primaryRed"
                            : "text-black/50 hover:bg-black/10"
                        } rounded-md cursor-pointer transition-all duration-300 select-none active:scale-90 font-semibold`}
                      >
                        {num}
                      </span>
                    </li>
                  );
                })}
              <li className="first:mr-2 last:ml-2">
                <span
                  className={`inline-flex items-center justify-center w-30px h-30px text-black/50 ${
                    currentPage < totalPages
                      ? "cursor-pointer hover:bg-black/10"
                      : ""
                  } rounded-md transition-all duration-300 select-none active:scale-90 p-2`}
                  onClick={() =>
                    currentPage < totalPages &&
                    handlePageChange(currentPage, "increment")
                  }
                >
                  <RightArrowIcon className="w-full h-full" />
                </span>
              </li>
            </ul>
          )}

          {!summaryTableType && (
            <div className="flex items-center gap-10px">
              <label
                htmlFor=""
                className="text-base/5 text-black/50 font-semibold"
              >
                Show
              </label>
              <select
                name=""
                id=""
                className="px-15px py-2.5 w-24 text-13px/4 bg-transparent text-black border border-solid border-black/20 rounded-md"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setLimit(Number(e.target.value));
                  dispatch(currentPageCount(1));
                }}
              >
                <option
                  value={
                    dataPerPage && defaultPerPageData == dataPerPage
                      ? dataPerPage
                      : 10
                  }
                  selected
                >
                  {dataPerPage && defaultPerPageData == dataPerPage
                    ? dataPerPage
                    : 10}
                </option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
