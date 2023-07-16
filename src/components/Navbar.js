import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../myContext";
import ModalComponent from "./ModalComponent";

const Navbar = ({ categories, regions, languages }) => {
  const { region, language, bookmarks } = useContext(MyContext);

  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [searchText, setSearchText] = useState("");

  const inflateModal = (type) => {
    setShowModal(true);
    setModalType(type);
  };

  const currentDate = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  let [formattedDate, setFormattedDate] = useState();
  useEffect(() => {
    if(region && language){
      setFormattedDate(currentDate.toLocaleDateString(
        `${language}-${region.toUpperCase()}`,
        options
      ));
    }
    
  }, [region, language])
  

  // console.log(formattedDate);

  useEffect(() => {
    if (document) {
      document.body.style.overflow = (showModal | showMenu) ? "hidden" : "auto";
    }
  }, [showModal, showMenu]);

  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const navigate = useNavigate();
  const onSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      // Redirect to search results page with the search term as a query parameter
      navigate(`/search?keyword=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <>
      <nav className="navbar1 bg-inherit dark:bg-gray-900">
        <div className="py-4 px-2 sm:p-3 max-w-screen-xl flex flex-wrap flex-col md:flex-row items-center justify-between mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:mt-0 md:border-0 bg-inherit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="flex items-center">
                <button
                  className="text-stone-800 hover:bg-stone-200 focus:outline-none font-semibold border mr-2 border-stone-400 text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => inflateModal("Region")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-globe2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                  </svg>
                  <span className="ps-2">
                    {regions && Object.keys(regions).find(
                      (key) => regions[key] === region
                    )}
                  </span>

                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </li>

              <li>
                <button
                  id="dropdownDefaultButton"
                  className="text-stone-800 hover:bg-stone-200 focus:outline-none font-semibold border border-stone-400 text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => inflateModal("Language")}
                >
                  <span className="">
                    {language && Object.keys(languages).find(
                      (key) => languages[key] === language
                    )}
                  </span>

                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Link
              className="text-xl heading-title text-stone-800 sm:text-2xl uppercase text-center font-bold tracking-wide whitespace-nowrap"
              to="/"
            >
              The virtual times
            </Link>
            <p className="text-center font-medium border-t border-stone-400 text-stone-600 pt-1 text-xs">
              {formattedDate}
            </p>
          </div>

          <div className="mt-2 w-full md:m-0 md:w-auto">
            <form className="h-full" onSubmit={onSearch}>
              <div className="flex items-center h-full font-semibold border focus:bg-slate-100 border-stone-400">
                <div className="h-full p-3 flex-shrink-0 z-10 inline-flex items-center text-sm font-medium text-center  dark:bg-gray-700">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <div className="relative h-full w-full">
                  <input
                    className="block h-full p-3 ps-0 bg-transparent w-full z-20 text-sm focus:outline-none"
                    placeholder="Enter topic, keyword.."
                    required
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
                {/* <button
                        type="submit"
                        className="top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >Search
                      </button> */}
              </div>
            </form>
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 inline-flex items-center p-2 ml-2 mt-4 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={()=>setShowMenu(true)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </nav>

      {/* modal */}
      {showModal && (
        <ModalComponent
          type={modalType}
          data={modalType === "Language" ? languages : regions}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}

      {showMenu && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed bottom-0 left-0 right-0 z-30 w-full md:inset-0 h-full bg-stone-400 bg-opacity-40"
        >
          <div className="relative w-full max-w-md bottom-0 max-h-full mx-auto">
            <div className="relative bg-stone-100 shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute mx-6 mt-2 right-0 text-stone-400 bg-transparent hover:bg-stone-200 hover:text-stone-700  text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={()=>setShowMenu(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <div
                  className=""
                  id="navbar-default"
                >
                  <ul className="font-medium flex flex-col mt-6 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className="flex items-center">
                      <button
                        className="text-stone-800 hover:bg-stone-200 w-full focus:outline-none font-semibold border border-stone-400 text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                        onClick={() => inflateModal("Region")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-globe2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                        </svg>
                        <span className="ps-2 flex-grow text-left">
                          {Object.keys(regions).find(
                            (key) => regions[key] === region
                          )}
                        </span>

                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                    </li>

                    <li>
                      <button
                        id="dropdownDefaultButton"
                        className="text-stone-800 w-full mt-2 hover:bg-stone-200 focus:outline-none font-semibold border border-stone-400 text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                        onClick={() => inflateModal("Language")}
                      >
                        <span className="flex-grow text-left">
                          {Object.keys(languages).find(
                            (key) => languages[key] === language
                          )}
                        </span>

                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav
        className="navbar2 sticky top-0 z-20 bg-stone-100 shadow-lg shadow-stone-100"
        id="navbar2_component"
      >
        <ul className="flex md:justify-center overflow-y-auto no-scrollbar px-2 sm:px-4 md:px-0 border-t border-b border-stone-400">
          <li className="text-stone-500 hover:text-stone-800">
            <NavLink
              className={({ isActive }) =>
                `py-3 text-base sm:text-sm font-semibold px-2.5 block ${
                  isActive
                    ? "text-stone-800 border-b-2 border-stone-500"
                    : "navbarlink"
                }`
              }
              to="/bookmarks"
            >
              Bookmarks
              <span className="bg-stone-200 px-1 ms-1.5 rounded-sm">
                {bookmarks.length}
              </span>
            </NavLink>
          </li>

          <li className="bg-stone-400 w-[0.8px] min-w-[0.8px] m-2 my-3"></li>

          {categories.map((categoryObj) => (
            <li key={categoryObj} className="text-stone-500 hover:text-stone-800">
              <NavLink
                className={({ isActive }) =>
                  `py-3 text-base sm:text-sm font-semibold px-2.5 block ${
                    isActive
                      ? "text-stone-800 border-b-2 border-stone-500"
                      : "navbarlink"
                  }`
                }
                to={`/${categoryObj}`}
              >
                {categoryObj === "nation"
                  ? Object.keys(regions).find((key) => regions[key] === region)
                  : capitalize(categoryObj)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
