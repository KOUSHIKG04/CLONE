import React from "react";

const ConfirnRide = ({
  setConfirmRidePanel,
  setVehiclePanel,
  setVehicleFound,
}) => {
  return (
    <div className="p-2">
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          setConfirmRidePanel(false);
        }}
      >
        <span
          className="absolute top-9 right-5 items-center cursor-pointer p-2"
          onClick={() => {
            setVehiclePanel(false);
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
        </span>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">CONFIRM YOUR RIDE</h3>

      <div className="flex gap-2 justify-between flex-col items-center ">
        <img
          className="h-20 mt-4"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-full mt-5 p-4 border-2 border-gray-400 rounded-xl">
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
              className="border-dashed absolute h-16 w-[3px] top-[51.5%] -translate-y-1/2 
            left-[64px] bg-gray-400 rounded-full"
            ></div>
            <div className="mt-2">
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Address please 
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
                Address please 
              </p>
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
        <button
          onClick={() => {
            setVehicleFound(true);
            setConfirmRidePanel(false);
          }}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
};

export default ConfirnRide;
