import React from "react";

const WaitngForDriver = ({ setWaitingForDriver, setVehiclePanel }) => {
  return (
    <div className="p-3">
      <h3
        className="absolute top-2 right-5 items-center cursor-pointer p-2"
        onClick={() => {
          setWaitingForDriver(false);
        }}
      >
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
      </h3>

      <div className="flex gap-2 justify-between p-4">
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
        <div className="w-full mt-8 p-4  ">
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
              className="border-dashed absolute h-16 w-[3px] top-[60.5%] -translate-y-1/2 
            left-[67px] bg-gray-400 rounded-full"
            ></div>
            <div className="mt-2">
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Address please abxcgdkj
              </p>
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
              <p className="text-sm -mt-1 text-gray-600">
                Address please abxcgdkj
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3"></div>
        </div>
      </div>
    </div>
  );
};

export default WaitngForDriver;
