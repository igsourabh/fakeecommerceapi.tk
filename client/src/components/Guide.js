import React, { useEffect } from "react";
import "./prism.css";
import Prism from "prismjs";

const Guide = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className="container">
        <div className="con flex justify-center items-center mt-14 ">
          <div className="main">
            <h1 className="text-4xl "> Guide</h1>
            <p className="text-base">
              You can copy paste the code in your browser console to quickly
              test FakeEcommerceAPI.
            </p>
            <h1 className="text-black text-2xl font-bold my-6">
              Getting a resource
            </h1>
            <h1 className=" font-semibold">For getting all Products</h1>
            <div className=" mx-auto w-[360px] sm:w-fit ">
              <pre className="">
                <code className="language-js ">
                  {`fetch('https://instaclone.tk/getallproducts')
.then(response => response.json())                                                         
.then(json => console.log(json))}`}
                </code>
              </pre>
            </div>
            <h1 className="text-black text-2xl font-bold my-6">Output</h1>
            <div className=" mx-auto w-[360px] sm:w-fit ">
              <pre className="">
                <code className="language-js ">
                  {`{
_id: "625001a3f57dd834e00ca8cc",
title: "Apple iPhone 12 Pro, 128GB, Graphite",
description: "Unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.). Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity. Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information. Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card. Backed by a one-year satisfaction guarantee.",
image: "http://res.cloudinary.com/sourabhvaish/image/upload/q_auto/v1649410223/fsmb8v2pnxldukqw8kq6.jpg",
price: "$1500",
category: "mobilephone",
createdAt: "2022-04-08T09:34:27.957Z",
updatedAt: "2022-04-08T09:34:27.957Z",
__v: 0,}`}
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
