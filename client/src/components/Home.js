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
      <div className="main ">
        <div className="content bg-blue-700 h-[600px] sm:h-[500px] w-full sm-sull flex justify-center  pb-28 items-center sm:pr-72 sm:pb-20">
          <div>
            <h1 className="text-white text-3xl sm:text-5xl mb-14">
              Fake{"{"}Ecommerce{"}"}api
            </h1>
            <p className="text-blue-200 text-lg sm:text-2xl">
              Free fake API for testing and prototyping
            </p>
            <h1 className="text-blue-200 text-lg sm:text-2xl ">
              Powerder by{" "}
              <a href="" className="text-white">
                Sourabh Vaish
              </a>
            </h1>
          </div>
        </div>

        <div className="flex justify-center items-center sm:pr-72">
          <div className="">
            <div className="sec  flex justify-center items ml-3 sm:ml">
              <div className="sm:pr-28">
                <h1 className="text-3xl mb-7 sm:mb-5 font-bold text-gray-700 ">
                  Try
                </h1>
                <p className="text-lg text-gray-700">
                  Run this code here, in a console or from any site:
                </p>
              </div>
            </div>

            <div className=" ">
              <div className=" mx-auto w-[360px] sm:w-fit ">
                <pre className="">
                  <code className="language-js ">
                    {`fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))}`}
                  </code>
                </pre>
              </div>
              <div className="mx-auto  pl-2 sm:pl-0  w-[360px] sm:w-2/5">
                <button
                  onClick={onrunscriptclick}
                  className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded-md "
                >
                  runscript
                </button>
              </div>

              <div className=" mx-4 min-w-28 ">
                <pre>
                  <code className="language-js ">
                    {!showscirpt
                      ? `{}`
                      : `{   "id":1,
     "name":"prototype
     "type":"products" }`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="when">
          <div className="con flex-col sm:px-72 justify-center items-center p-4">
            <h1 className=" text-3xl  text-gray-600 pr-28 sm:pr-52 capitalize">
              when to use
            </h1>
            <p className="text-gray-700 pt-2 text-xm font-medium">
              FakeEcommerceAPI is a free online REST API that you can use
              whenever you need some fake data. It can be in a README on GitHub,
              for a demo on CodeSandbox, in code examples on Stack Overflow,
              ...or simply to test things locallys.
            </p>

            <h1 className="mt-14  text-3xl  text-gray-600 pr-28 sm:pr-52 capitalize">
              Routes
            </h1>
            <p className="text-gray-700 pt-2 text-xm font-medium">
              FakeEcommerceAPI comes with a set of 6 common resources:
            </p>
            <div className="text-gray-700 pt-2 text-xm font-medium flex-col">
              <div>
                GET
                <a href="" className="ml-14 text-blue-500">
                  /post
                </a>{" "}
              </div>
              <div>
                GET
                <a href="" className="ml-14 text-blue-500">
                  /post
                </a>{" "}
              </div>
              <div>
                GET
                <a href="" className="ml-14 text-blue-500">
                  /post
                </a>{" "}
              </div>
              <div>
                DELETE
                <a href="" className="sm:ml-8 ml-7 text-blue-500">
                  /post
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
