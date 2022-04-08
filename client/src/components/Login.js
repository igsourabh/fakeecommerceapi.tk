import axios from "axios";
import React, { useState } from "react";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const emailchange = (e) => {
    setemail(e.target.value);
  };
  const passwordchange = (e) => {
    setpassword(e.target.value);
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("/api/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.status == 201) {
          localStorage.setItem("authtoken", res.data.authtoken);
          props.history.push("/form");
          window.location.reload(false);
        }

        console.log(res.data);
      });
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form
          className="w-full md:w-1/3 bg-white rounded-lg"
          onSubmit={handelsubmit}
        >
          <div className="flex font-bold justify-center mt-6">
            <img
              className="h-20 w-20"
              src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
            />
          </div>
          <h2 className="text-3xl text-center text-gray-700 mb-4">
            Admin Panel
          </h2>
          <div className="px-12 pb-10">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
                <input
                  onChange={emailchange}
                  value={email}
                  type="text"
                  placeholder="Username"
                  className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
                <input
                  onChange={passwordchange}
                  value={password}
                  type="text"
                  placeholder="Password"
                  className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                />
              </div>
            </div>
            <a href="#" className="text-xs text-gray-500 float-right mb-4">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
