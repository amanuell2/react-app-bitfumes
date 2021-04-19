import React, { useState } from "react";

const Banner = ({ query, setQuery }) => {
  const [timer, setTimer] = useState("");
  const changeDelay = (change) => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(() => {
        setQuery(change);
      }, 500)
    );
  };

  return (
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center  bg-black"
      style={{
        minHeight: "65vh",
      }}
    >
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-bold uppercase text-3xl">
                Find repository easily
              </h1>
            </div>
            <form className="relative">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="absolute left-4 mt-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <input
                className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                type="text"
                aria-label="Filter projects"
                placeholder="Filter projects"
                onChange={(e) => {
                  changeDelay(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
