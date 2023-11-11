import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      {breadcrumbs.map(({ breadcrumb, match }) => (
        <span className="text-blue-700 font-light">
          <NavLink to={match.pathname}> {breadcrumb} </NavLink>
          <BsChevronDoubleRight className="text-white inline" />
        </span>
      ))}
    </>
  );
};
