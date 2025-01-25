import React from "react";

const LocationSearchPannel = ({ setVehiclePanel, setPannelOpen }) => {
  const location = [" 204, Benkesha Complex"];

  const handleSuggestionClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {location.map((elem, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              setVehiclePanel(true);
              setPannelOpen(false);
            }}
            className="flex gap-4 border-2 p-2 border-gray-10 mb-4
       active:border-gray-500 rounded-xl items-center justify-start"
          >
            <h2 className=" h-12 text-md flex items-center justify-center w-12 rounded-full ">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </h2>
            <h4 className="font-medium text-md">{elem}</h4>
          </div>
        );
      })}
    </>
  );
};

export default LocationSearchPannel;
