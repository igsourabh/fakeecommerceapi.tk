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
              <h1 className="text-4xl "> Guide</h1>
              <p className="text-base">
                You can copy paste the code in your browser console to quickly
                test FakeEcommerceAPI.
              </p>
              <h1 className=" font-semibold text-3xl mt-4">
                For getting all Products
              </h1>
              <pre className="">
                <code className="language-js ">
                  {`fetch('https://instaclone.tk/getallproducts')
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
            <div className="w-96 md:w-[560px] px-4 md:px-0">
              <h1 className=" font-semibold text-3xl mt-4">
                Products by category
              </h1>
              <pre className="">
                <code className="language-js ">
                  {`fetch('https://instaclone.tk/category/mobiles')
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
