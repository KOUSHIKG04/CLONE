import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";

const ConfirmRidePopUp = ({ setConfirmRidePopupPanel, setRidePopupPanel }) => {
  const [otp, setOtp] = useState("");
  const submitHander = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="p-3">
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => setRidePopupPanel(false)}
      >
        {/* <span className="absolute top-11 right-5 items-center cursor-pointer p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span> */}
      </h5>
      <h3 className="text-xl font-semibold p-2 text-center">
        CONFIRM THIS RIDE TO START
      </h3>
      <div className="flex items-center justify-between py-5 px-7 bg-gray-200 rounded-xl mt-4 ">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">FULLNAME</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center ">
        <div className="w-full p-4 ">
          <div className="flex items-center gap-5 p-3  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6 mb-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div
              className="border-dashed absolute h-16 w-[3px] top-[34%] -translate-y-1/2 
              left-[62.75px] bg-gray-400 rounded-full"
            ></div>
            <div className="mt-2">
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Address please</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6 mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <div className="mb-2">
              <h3 className="text-lg font-medium mt-5">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Address please</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 9h3.75m-4.5 2.625h4.5M12 18.75 9.75 16.5h.375a2.625 2.625 0 0 0 0-5.25H9.75m.75-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>

            <div>
              <h3 className="text-lg font-medium">₹{0}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-[95%]">
          <form className="flex flex-col" onSubmit={submitHander}>
            <Input
              type="text"
              placeholder="ENTER OTP"
              className="bg-[#eeeeeee2] py-6 px-6 font-semibold text-xl"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />{" "}
            <Link
              to="/captain-riding"
              className="w-full mt-8 py-3.5 bg-green-600 text-white font-semibold text-md
              text-center hover:bg-green-700 hover:text-white rounded-lg"
            >
              CONFIRM
            </Link>
            <Button
              onClick={() => {
                setRidePopupPanel(false);
                setConfirmRidePopupPanel(false);
              }}
              className="w-full mt-4 font-semibold py-6 text-black bg-slate-300 text-md
            hover:text-white"
            >
              {" "}
              CANCEL
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
