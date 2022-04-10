import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const authtoken = localStorage.getItem("authtoken");
  const [menu, setmenu] = useState(false);
  const History = useHistory();
  const handellogout = () => {
    localStorage.removeItem("authtoken");
    History.push("/");
    window.location.reload(false);
  };
  const sidemenu = () => {
    setmenu(true);
  };
  const hidemenu = () => {
    setmenu(false);
  };
  return (
    <>
      <div className="md:hidden">
        <div className="content flex justify-center items-center py-2 ">
          <div className="absolute top-2 left-1 pl-3 pt-1">
            {!menu && (
              <button
                onClick={sidemenu}
                className="hamburbger flex-col cursor-pointer "
              >
                <div className="line p- w-6 h-0.5 bg-blue-600  my-1"></div>
                <div className="line p- w-6 h-0.5 bg-blue-600  my-1"></div>
                <div className="line p- w-6 h-0.5 bg-blue-600  my-1"></div>
              </button>
            )}
            {menu && (
              <button
                onClick={hidemenu}
                className="hamburbger flex-col cursor-pointer "
              >
                <div className="line p- w-6 h-0.5 bg-blue-600  my-1"></div>
                <div className="line p- w-6 h-0.5 bg-blue-600  my-1"></div>
                <div className="line p- w-6 h-0.5 bg-blue-600  my-1"></div>
              </button>
            )}
          </div>

          <h1 className="text-blue-700 text-lg font-bold">
            <Link to="/">FakeEcommerceAPI</Link>{" "}
          </h1>
        </div>
      </div>
      {menu && (
        <div
          className="sidebar bg-white border-b-2 absolute w-full border-t-2 "
          style={{ zIndex: "1" }}
        >
          <div className="con flex bg-white justify-start items-center ml-5 py-4">
            <ul className="bg-white">
              <li className="my-1 text-blue-700 text-lg font-medium">
                <Link to="/guide">Guide</Link>
              </li>
              <li className="my-1 text-blue-700 text-lg font-medium">
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li className="my-1 text-blue-700 text-lg font-medium">
                <Link to="">About Us</Link>
              </li>
              {!authtoken && (
                <li className="my-1 text-blue-700 text-lg font-medium">
                  <Link to="">Login</Link>
                </li>
              )}
              {authtoken && (
                <li className="my-1 text-white bg-blue-700 flex justify-center items-center text-lg  rounded-md">
                  <Link to="">logout</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}

      <div className="hidden md:block main ">
        <div className="content bg-white flex justify-center h-16 items-center  ">
          <ul className=" pr-96 ">
            <li>
              <Link to="" className="text-blue-700 text-lg font-bold">
                FakeEcommerceAPI
              </Link>
            </li>
          </ul>
          <ul className="flex ">
            <li>
              <Link
                to="/guide"
                className="text-blue-600 text-lg font-normal mx-2"
              >
                Guide
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="text-blue-600 text-lg font-normal mx-2"
              >
                Contact us
              </Link>
              <Link to="" className="text-blue-600 text-lg font-normal mx-2">
                About us
              </Link>
            </li>
          </ul>

          {!authtoken && (
            <div className="absolute right-2">
              <Link
                to="/login"
                className="bg-blue-600 text-white py-1 px-3 rounded-md "
              >
                login
              </Link>
            </div>
          )}
          {authtoken && (
            <div className="absolute right-2">
              <button
                onClick={handellogout}
                className="bg-blue-600 text-white py-1 px-3 rounded-md "
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
