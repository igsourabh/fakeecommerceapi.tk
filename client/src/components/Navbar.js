import React from "react";

const navbar = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="content flex justify-center items-center py-2 ">
          <div className="absolute top-2 left-1 pl-3 pt-1">
            <div className="hamburbger flex-col cursor-pointer ">
              <div className="line p- w-6 h-0.5 bg-blue-600 my-1"></div>
              <div className="line p- w-6 h-0.5 bg-blue-600 my-1"></div>
              <div className="line p- w-6 h-0.5 bg-blue-600 my-1"></div>
            </div>
          </div>

          <h1 className="text-blue-700 text-lg font-bold">FakeEcommerceAPI</h1>
        </div>
      </div>

      <div className="hidden md:block main ">
        <div className="content bg-white flex justify-center h-16 items-center  ">
          <ul className="  ">
            <li>
              <a href="" className="text-blue-700 text-lg font-bold">
                FakeEcommerceAPI
              </a>
            </li>
          </ul>
          <ul className="flex ml-40">
            <li>
              <a href="" className="text-blue-600 text-sm  mx-2">
                contact us
              </a>
            </li>
            <li>
              <a href="" className="text-blue-600 text-sm  mx-2">
                about us
              </a>
              <a href="" className="text-blue-600 text-sm  mx-2">
                Guide
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default navbar;
