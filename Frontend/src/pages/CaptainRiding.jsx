import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import FinishRide from "@/components/Finishride";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative flex flex-col justify-end">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-20 mb-14 mt-2 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="fixed top-5 right-5 bg-white p-2 rounded-full cursor-pointer "
        >
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
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
        </Link>
      </div>
      <div className="h-4/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div
        className="h-1/5 p-8 relative pt-10  "
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5 className="cursor-pointer p-4 w-full absolute top-0 right-[170px] flex items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </h5>
        <h4 className="text-xl font-semibold text-center mt-4 mb-4 ">
          RIDING 4KM AWAY
        </h4>
        <Button
          className="w-full py-6 bg-green-600 text-white font-semibold text-md 
        hover:bg-green-700 hover:text-white mb-4"
        >
          Complete Ride
        </Button>
      </div>
      <div
        ref={finishRidePanelRef}
        className=" fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
