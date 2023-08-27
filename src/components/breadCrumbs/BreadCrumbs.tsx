import { MenuList } from "@/constants/DropdownConstants";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface IBreadCrumbs {
  title: string;
  link: string;
}

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumbs[]>([]);

  useEffect(() => {
    MenuList?.map((value) => {
      const findSubPath =
        value.subMenu &&
        value?.subMenuList?.find((data) => data.link == pathname);
      if (value.link == pathname)
        setBreadCrumbs([{ link: value.link, title: value.name }]);
      else if (findSubPath) {
        setBreadCrumbs([
          { link: value.link, title: value.name },
          { link: findSubPath.link, title: findSubPath.name },
        ]);
      }
    });
  }, [pathname]);
  return (
    <div className="font-bold text-26px/8">
      {breadCrumbs?.map((value: IBreadCrumbs, inx: number) => {
        return (
          <>
            {inx > 0 && ` >>`} {value.title}
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
