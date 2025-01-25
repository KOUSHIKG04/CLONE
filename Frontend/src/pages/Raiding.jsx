import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Raiding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className="fixed top-5 right-5 bg-white p-2 rounded-full cursor-pointer ">
        {" "}
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
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>

      <div className="h-1/2 w-screen bg-slate-400">
        <img src="" alt="" />
      </div>
      <div className="h-1/2 p-4  ">
        <div className="flex  justify-between p-4 ">
          <img
            className="h-12 "
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className="text-right">
            <h2 className="tetx-lg font-semibold">ABCDEF</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP 04 b 1234</h4>
            <p className="text-sm text-gray-800">MARUTHI </p>
          </div>
        </div>

        <div className="flex gap-2 justify-between flex-col items-center ">
          <div className="w-full mt-1 p-4  ">
            <div className="flex items-center gap-5 p-3">
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
                className="border-dashed absolute h-16 w-[3px] top-[74.5%] -translate-y-1/2 
            left-[54px] bg-gray-400 rounded-full"
              ></div>
              <div className="">
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

            <div className="flex items-center justify-between gap-4 p-3 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 9h3.75m-4.5 2.625h4.5M12 18.75 9.75 16.5h.375a2.625 2.625 0 0 0 0-5.25H9.75m.75-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>

              <div className="flex-grow">
                <h3 className="text-lg font-medium">₹{0}</h3>
                <p className="text-sm text-gray-600"></p>
              </div>

              <Button className="w-1/3 px-4 py-2 rounded-lg">PAY</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Raiding;
