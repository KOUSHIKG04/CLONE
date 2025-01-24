import React from "react";

const VehiclePannel = ({ setVehiclePanel, setConfirmRidePanel }) => {
  return (
    <div>
      <h5
        className="absolute top-7 right-5 items-center cursor-pointer p-2"
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
      </h5>

      <h2 className="text-xl ml-2 font-bold mb-5">CHOOSE A VEHICLE</h2>
      <div
        className="flex w-full justify-between items-center p-4 border-2
         active:border-black  rounded-xl mb-3"
        onClick={() => {
          setConfirmRidePanel(true);
        }}
      >
        <img
          className="h-12 rounded-full p-0.5"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-bold text-sm flex items-center">
            <span className="text-lg font-bold">Uber Go</span>
            <span className="mb-0.5 mt-0.25 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="size-4 ml-2 mr-0.5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="mt-0.5 text-sm">4</span>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 min away</h5>

          <p className="font-normal text-xs text-gray-700">
            Affordable, comapct ride
          </p>
        </div>
        <h2 className="text-md font-semibold">₹ 200</h2>
      </div>
      <div
        className="flex w-full justify-between items-center p-4 border-2
         active:border-black  rounded-xl mb-3"
        onClick={() => {
          setConfirmRidePanel(true);
        }}
      >
        <img
          className="h-12 rounded-full p-0.5"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-bold text-sm flex items-center">
            <span className="text-lg font-bold">Moto</span>
            <span className="mb-0.5 mt-0.25 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="size-4 ml-2 mr-0.5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="mt-0.5 text-sm">1</span>
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 min away</h5>

          <p className="font-normal text-xs text-gray-700">
            Affordable motorcycle ride
          </p>
        </div>
        <h2 className="text-md font-semibold">₹ 66.1</h2>
      </div>
      <div
        className="flex w-full justify-between items-center p-4 border-2
         active:border-black  rounded-xl mb-3"
      >
        <img
          className="h-12 rounded-full p-0.5"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-bold text-sm flex items-center">
            <span className="text-lg font-bold">Uber Auto </span>
            <span className="mb-0.5 mt-0.25 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="size-4 ml-2 mr-0.5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="mt-0.5 text-sm">3</span>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 min away</h5>

          <p className="font-normal text-xs text-gray-700">
            Affordable, comapct ride
          </p>
        </div>
        <h2 className="text-md font-semibold">₹ 165</h2>
      </div>
    </div>
  );
};

export default VehiclePannel;
