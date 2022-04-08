import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "./prism.css";
import axios from "axios";

const Home = () => {
  const [showscirpt, setshowscirpt] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const onrunscriptclick = () => {
    setshowscirpt(true);
    axios.get("/ok").then((res) => {
      console.log(res);
    });
    setTimeout(() => {
      axios.get("/o").then((res) => {
        console.log(res);
      });
    }, 5000);
  };

  return (
    <>
      <div className="example">
        <div className="content bg-blue-700 h-[600px] md:h-[500px] w-full sm-full flex justify-center  pb-28 items-center md:pr-72 md:pb-20">
          <div>
            <h1 className="text-white text-3xl md:text-5xl mb-14">
              Fake{"{"}Ecommerce{"}"}api
            </h1>
            <p className="text-blue-200 text-lg md:text-2xl">
              Free fake API for testing and prototyping
            </p>
            <h1 className="text-blue-200 text-lg md:text-2xl ">
              Powerder by{" "}
              <a href="" className="text-white">
                Sourabh Vaish
              </a>
            </h1>
          </div>
        </div>

        <div className="flex justify-center px-4 md:px-44 my-16">
          <div className=" ">
            <div className="  ">
              <div className="">
                <div className="sec  items ml-3 ">
                  <div className="">
                    <h1 className="text-3xl mb-7 md:mb-5 font-bold text-gray-700 ">
                      Try
                    </h1>
                    <p className="text-lg text-gray-700">
                      Run this code here, in a console or from any site:
                    </p>
                  </div>
                </div>

                <div className=" flex justify-center items-center sm:block ">
                  <div>
                    <div className="  w-[360px] md:w-fit ">
                      <pre className="">
                        <code className="language-js ">
                          {`fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))}`}
                        </code>
                      </pre>
                    </div>
                    <div className="">
                      <button
                        onClick={onrunscriptclick}
                        className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded-md "
                      >
                        runscript
                      </button>
                    </div>

                    <div className="w-[360px] md:w-96">
                      <pre>
                        <code className="language-js ">
                          {!showscirpt
                            ? `{}`
                            : `{
"title": "title",
"description": "description",
"image": "image.url",
 "price": "price",
"category": "category"
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="">
                <h1 className=" text-3xl  text-gray-600  capitalize">
                  when to use
                </h1>
                <p className="text-gray-700 pt-2 text-xm font-medium">
                  FakeEcommerceAPI is a free online REST API that you can use
                  whenever you need some fake data. It can be in a README on
                  GitHub, for a demo on CodeSandbox, in code examples on Stack
                  Overflow, ...or simply to test things locallys.
                </p>

                <h1 className="mt-14  text-3xl  text-gray-600 pr-28 md:pr-52 capitalize">
                  Routes
                </h1>
                <p className="text-gray-700 pt-2 text-xm font-medium">
                  FakeEcommerceAPI comes with a set of 6 common resources:
                </p>
                <div className="text-gray-700 pt-2 text-xm font-medium flex-col">
                  <div>
                    GET
                    <a
                      target="_blank"
                      href="https://www.fakeecommerceapi.tk/getallproducts"
                      className="ml-14 text-blue-500"
                    >
                      /getallpost
                    </a>{" "}
                  </div>
                  <div>
                    GET
                    <a
                      target="_blank"
                      href="https://www.fakeecommerceapi.tk/category/mobilephone"
                      className="ml-14 text-blue-500"
                    >
                      /category/mobilephone
                    </a>{" "}
                  </div>
                  <div>
                    GET
                    <a
                      target="_blank"
                      href="https://www.fakeecommerceapi.tk/category/toys&games"
                      className="ml-14 text-blue-500"
                    >
                      /category/toys&games
                    </a>{" "}
                  </div>{" "}
                  <div>
                    GET
                    <a
                      target="_blank"
                      href="https://www.fakeecommerceapi.tk/category/electronics"
                      className="ml-14 text-blue-500"
                    >
                      /category/electronics
                    </a>{" "}
                  </div>{" "}
                  <div>
                    GET
                    <a
                      target="_blank"
                      href="https://www.fakeecommerceapi.tk/category/fashion"
                      className="ml-14 text-blue-500"
                    >
                      /category/fashion
                    </a>{" "}
                  </div>{" "}
                  <div>
                    GET
                    <a
                      target="_blank"
                      href="https://www.fakeecommerceapi.tk/category/computers"
                      className="ml-14 text-blue-500"
                    >
                      /category/computers
                    </a>{" "}
                  </div>{" "}
                  <div>
                    GET
                    <a
                      target="_blank"
                      href="https://www.fakeecommerceapi.tk/category/appliances"
                      className="ml-14 text-blue-500"
                    >
                      /category/appliances
                    </a>{" "}
                  </div>
                  <div>
                    GET
                    <a
                      target="_blank"
                      href="https://www.fakeecommerceapi.tk/category/books"
                      className="ml-14 text-blue-500"
                    >
                      /category/books
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
