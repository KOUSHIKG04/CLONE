import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <div
        className="bg-cover bg-[url(/homeImage.jpg)] h-screen pt-8 overflow-hidden 
      flex justify-between flex-col w-full"
      >
        <img
          className="w-20 ml-8 left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="py-10 px-8  bg-white ">
          <h2 className="text-xl font-bold text-center font-poppins">
            {" "}
            <span className="text-gray-800 font-poppins">
              GET STARTED WITH
            </span>{" "}
            UBER
          </h2>
          <Link to="/login">
            <Button className="w-full mt-5 mb-5 text-lg">
              CONTINUE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Start;
