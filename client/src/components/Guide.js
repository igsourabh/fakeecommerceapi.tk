import React, { useEffect } from "react";
import "./prism.css";
import Prism from "prismjs";

const Guide = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className="container mt-6">
        <div className="flex justify-center items-center w-full px-4 ">
          <div className="main ">
            <div className="w-96 md:w-[560px] px-4 md:px-0">
              <h1 className="text-4xl text-gray-700 "> Guide</h1>
              <p className="text-lg my-5">
                You can copy paste the code in your browser console to quickly
                test FakeEcommerceAPI.
              </p>
              <h1 className=" font-semibold text-xl md:text-2xl mb-5 text-gray-700 mt-4">
                For getting all Products
              </h1>
              <pre className="">
                <code className="language-js ">
                  {`fetch('https://www.fakeecommerceapi.tk/getallproducts')
.then(response => response.json())                                                         
.then(json => console.log(json))}`}
                </code>
              </pre>
            </div>
            <div className="w-96 md:w-[560px] px-4 md:px-0">
              <h1 className="">👇output</h1>
              <pre className="">
                <code className="language-js ">
                  {`{
"title": "title",
"description": "description",
"image": "image",
"price": "price",
"category": "category"}`}
                </code>
              </pre>
            </div>
            <hr />

            <div className="w-96 md:w-[560px] px-4 md:px-0">
              <h1 className=" font-semibold text-xl md:text-2xl mb-5 text-gray-700 mt-4">
                Get Products by category
              </h1>
              <pre className="">
                <code className="language-js ">
                  {`fetch('https://www.fakeecommerceapi.tk/category/mobilephone')
.then(response => response.json())                                                         
.then(json => console.log(json))}`}
                </code>
              </pre>
            </div>
            <div className="w-96 md:w-[560px] px-4 md:px-0">
              <h1 className="">👇output</h1>
              <pre className="">
                <code className="language-js ">
                  {`[{
"title": "title",
"description": "description",
"image": "image",
"price": "price",
"category": "category"}
{
  "title": "title",
  "description": "description",
  "image": "image",
  "price": "price",
  "category": "category"}]`}
                </code>
              </pre>
              <div className="categorylist ml-4">
                <h1 className="text-xl font-semibold capitalize">
                  fakeEcommercsAPI support category list
                </h1>
                <ul>
                  <li className="list-disc">
                    <h1 className="capitalize text-lg">mobilephones</h1>{" "}
                  </li>
                  <li className="list-disc">
                    {" "}
                    <h1 className="capitalize text-lg">fashion</h1>
                  </li>
                  <li className="list-disc">
                    {" "}
                    <h1 className="capitalize text-lg">computers</h1>
                  </li>
                  <li className="list-disc">
                    <h1 className="capitalize text-lg">electronics</h1>{" "}
                  </li>
                  <li className="list-disc">
                    <h1 className="capitalize text-lg">books</h1>{" "}
                  </li>
                  <li className="list-disc">
                    <h1 className="capitalize text-lg">toys&games</h1>{" "}
                  </li>
                  <li className="list-disc">
                    {" "}
                    <h1 className="capitalize text-lg">appliances</h1>
                  </li>
                </ul>
              </div>
            </div>

            <hr />
            <div className="w-96 md:w-[560px] px-4 md:px-0">
              <h1 className=" font-semibold text-xl md:text-2xl mb-5 text-gray-700 mt-4 capitalize">
                Get singel products by products id
              </h1>
              <pre className="">
                <code className="language-js ">
                  {`fetch('https://www.fakeecommerceapi.tk/category/computers/:id')
.then(response => response.json())                                                         
.then(json => console.log(json))}`}
                </code>
              </pre>
            </div>
            <div className="w-96 md:w-[560px] px-4 md:px-0">
              <h1 className="">👇output</h1>
              <pre className="">
                <code className="language-js ">
                  {`{
"title": "title",
"description": "description",
"image": "image",
"price": "price",
"category": "category"}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;
