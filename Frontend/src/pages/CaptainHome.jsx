import CaptianDetailes from "@/components/CaptianDetailes";
import RidePopUp from "@/components/RidePopUp";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "@/components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [state, setState] = useState({
    ridePopupPanel: true,
    confirmRidePopupPanel: false,
  });

  const refs = useRef({
    ridePopupPanelRef: null,
    confirmRidePopupPanelRef: null,
  });

  useGSAP(
    function () {
      if (state.ridePopupPanel) {
        gsap.to(refs.current.ridePopupPanelRef, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(refs.current.ridePopupPanelRef, {
          transform: "translateY(100%)",
        });
      }
    },
    [state.ridePopupPanel]
  );

  useGSAP(
    function () {
      if (state.confirmRidePopupPanel) {
        gsap.to(refs.current.confirmRidePopupPanelRef, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(refs.current.confirmRidePopupPanelRef, {
          transform: "translateY(100%)",
        });
      }
    },
    [state.confirmRidePopupPanel]
  );

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-between">
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
      <div className="h-2/5 p-6">
        <CaptianDetailes />
      </div>

      <div
        ref={(el) => (refs.current.ridePopupPanelRef = el)}
        className="fixed w-full z-10 bottom-0 bg-white px-3 pb-8 pt-4
        translate-y-full"
      >
        <RidePopUp
          setRidePopupPanel={(val) =>
            setState((prev) => ({ ...prev, ridePopupPanel: val }))
          }
          setConfirmRidePopupPanel={(val) =>
            setState((prev) => ({ ...prev, confirmRidePopupPanel: val }))
          }
        />
      </div>

      <div
        ref={(el) => (refs.current.confirmRidePopupPanelRef = el)}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-8 
        translate-y-full h-screen"
      >
        <ConfirmRidePopUp
          setConfirmRidePopupPanel={(val) =>
            setState((prev) => ({ ...prev, confirmRidePopupPanel: val }))
          }
          setRidePopupPanel={(val) =>
            setState((prev) => ({ ...prev, ridePopupPanel: val }))
          }
        />
      </div>
    </div>
  );
};

export default CaptainHome;
