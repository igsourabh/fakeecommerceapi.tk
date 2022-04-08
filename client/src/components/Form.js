import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const From = () => {
  const History = useHistory();
  const authtoken = localStorage.getItem("authtoken");
  if (!authtoken) {
    History.push("/");
  }
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [startingurl, setstartingurl] = useState("");
  const [endurl, setendurl] = useState("");
  const [imageloading, setimageloading] = useState(false);
  const titlechange = (e) => {
    settitle(e.target.value);
  };
  const descriptionchange = (e) => {
    setdescription(e.target.value);
  };
  const imagechange = (image) => {
    setimageloading(true);

    if (image === undefined) {
      alert("undefined");
      return;
    }
    if (image.type === "image/jpeg" || image.type === "image/png") {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "chatapp");
      data.append("cloud_name", "sourabhvaish");
      fetch("https://api.cloudinary.com/v1_1/sourabhvaish/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setimage(data.url);
          setstartingurl(data.url.slice(0, 52));
          setendurl(data.url.slice(52, data.url.length));
          console.log(data.url);
          // console.log(data.url.slice(0, 52));
          // console.log(data.url.slice(52, data.url.length));
          setimageloading(false);
        })
        .catch((err) => {});
    }
  };
  const categorychange = (e) => {
    setcategory(e.target.value);
    console.log(e.target.value);
  };
  const pricechange = (e) => {
    setprice(e.target.value);
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    if (category == "") {
      return alert("not pic");
    }
    const config = {
      headers: {
        "Content-type": "application/json",
        authtoken: authtoken,
      },
    };
    axios
      .post(
        "/api/auth/createproducts",
        {
          title: title,
          description: description,
          image: startingurl + "q_auto/" + endurl,
          price: price,
          category: category,
        },
        config
      )
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center mt-14">
        <form className="w-full max-w-lg" onSubmit={handelsubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Title
              </label>
              <input
                onChange={titlechange}
                value={title}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="title"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="file"
                accept="image/*"
                onChange={(e) => imagechange(e.target.files[0])}
                id="formFile"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Descriotion
              </label>
              <textarea
                onChange={descriptionchange}
                vlaue={description}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
              ></textarea>
              <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                category
              </label>
              <div className="relative">
                <select
                  value={category}
                  onChange={categorychange}
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option></option>
                  <option>mobilephone</option>
                  <option>fashion</option>
                  <option>computers</option>
                  <option>appliances</option>
                  <option>electronics</option>
                  <option>books</option>
                  <option>toys&games</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Price
              </label>
              <input
                onChange={pricechange}
                value={price}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="Price"
              />
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default From;
