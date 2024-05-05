import { explore, homes, pages, resources } from "@/data/menu";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const isActiveParentMenu = (menus) => {
    return menus.some(
      (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
    );
  };
  return (
    <>
      <li className="js-nav-dropdown group relative">
        <Link
          to={"/"}
          className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base $  hover:text-accent focus:text-accent  dark:hover:text-accent dark:focus:text-accent lg:px-5`}
          id="navDropdown-1"
        >
          Home
          <i className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-4 w-4 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </i>
        </Link>
      </li>

      <li className="js-nav-dropdown group relative">
        <Link
          to={"/collections"}
          className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base $  hover:text-accent focus:text-accent  dark:hover:text-accent dark:focus:text-accent lg:px-5`}
          id="navDropdown-1"
        >
          Explore
          <i className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-4 w-4 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </i>
        </Link>
      </li>

      <li className="js-nav-dropdown group relative">
        <Link
          to={"/blog"}
          className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base $  hover:text-accent focus:text-accent  dark:hover:text-accent dark:focus:text-accent lg:px-5`}
          id="navDropdown-4"
        >
          Blog
          <i className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-4 w-4 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </i>
        </Link>
      </li>
      <li className="js-nav-dropdown group relative">
        <Link
          to="/activity"
          className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base  $  hover:text-accent focus:text-accent  dark:hover:text-accent dark:focus:text-accent lg:px-5`}
          id="navDropdown-2"
        >
          Activity
          <i className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-4 w-4 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </i>
        </Link>
      </li>
    </>
  );
}
