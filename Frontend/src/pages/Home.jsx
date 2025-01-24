import { Input } from "@/components/ui/input";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "@/components/LocationSearchPanel";
import VehiclePannel from "@/components/VehiclePannel";
import ConfirnRide from "@/components/ConfirnRide";
import LookingForDriver from "@/components/LookingForDriver";

const Home = () => {
  // State management grouped into an object
  const [state, setState] = useState({
    pickup: "",
    destination: "",
    vehiclePanel: false,
    vehicleFound: false,
    activeField: null,
    vehicleType: null,
    confirmRidePanel: false,
    waitingForDriver: false,
    ride: null,
    panelOpen: false,
    fare: {},
    destinationSuggestions: [],
    pickupSuggestions: [],
  });

  const refs = useRef({
    vehiclePanel: null,
    vehicleFound: null,
    confirmRidePanel: null,
    waitingForDriver: null,
    panelClose: null,
    panel: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (field, value) => {
    setState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useGSAP(() => {
    if (state.panelOpen) {
      gsap.to(refs.current.panel, {
        height: "70%",
        padding: 24,
      });
      gsap.to(refs.current.panelClose, {
        opacity: 1,
      });
    } else {
      gsap.to(refs.current.panel, {
        height: "0%",
        padding: 0,
      });
      gsap.to(refs.current.panelClose, {
        opacity: 0,
      });
    }
  }, [state.panelOpen]);

  useGSAP(() => {
    if (state.vehiclePanel) {
      gsap.to(refs.current.vehiclePanel, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(refs.current.vehiclePanel, {
        transform: "translateY(100%)",
      });
    }
  }, [state.vehiclePanel]);

  useGSAP(() => {
    if (state.confirmRidePanel) {
      gsap.to(refs.current.confirmRidePanel, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(refs.current.confirmRidePanel, {
        transform: "translateY(100%)",
      });
    }
  }, [state.confirmRidePanel]);

  useGSAP(() => {
    if (state.vehicleFound) {
      gsap.to(refs.current.vehicleFound, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(refs.current.vehicleFound, {
        transform: "translateY(100%)",
      });
    }
  }, [state.vehicleFound]);

  useGSAP(() => {
    if (state.waitingForDriver) {
      gsap.to(refs.current.waitingForDriver, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(refs.current.waitingForDriver, {
        transform: "translateY(100%)",
      });
    }
  }, [state.waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden font-poppins">
      <img
        className="w-20 mb-14 mt-4 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      <div className="h-screen w-screen bg-slate-400">
        <img src="" alt="" />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[27%] p-8 bg-white relative rounded-t-xl">
          <h5
            className="absolute top-5 right-5 cursor-pointer"
            ref={(el) => (refs.current.panelClose = el)}
            onClick={() => {
              setState((prev) => ({ ...prev, panelOpen: false }));
            }}
          >
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
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h5>
          <h4 className="text-2xl font-bold mb-4">FIND A TRIP</h4>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="line absolute h-16 w-1 top-[60%] -translate-y-1/2 right-[58px] bg-gray-500 rounded-full"></div>
            <Input
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  panelOpen: true,
                  activeField: "pickup",
                }))
              }
              value={state.pickup}
              onChange={(e) => handleChange("pickup", e.target.value)}
              type="text"
              className="bg-[#eeeeeee2] p-5"
              placeholder="Add pick-up location"
            />
            <Input
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  panelOpen: true,
                  activeField: "destination",
                }))
              }
              value={state.destination}
              onChange={(e) => handleChange("destination", e.target.value)}
              type="text"
              className="bg-[#eeeeeee2] p-5"
              placeholder="Add drop-off location"
            />
          </form>
        </div>
        <div className="bg-white h-0" ref={(el) => (refs.current.panel = el)}>
          <LocationSearchPanel
            setPannelOpen={() =>
              setState((prev) => ({ ...prev, panelOpen: !prev.panelOpen }))
            }
            setVehiclePanel={(val) =>
              setState((prev) => ({ ...prev, vehiclePanel: val }))
            }
          />
        </div>
      </div>

      <div
        ref={(el) => (refs.current.vehiclePanel = el)}
        className="fixed w-full z-10 bottom-0  bg-white px-4 py-8 rounded-t-xl
       translate-y-full "
      >
        <VehiclePannel
          setVehiclePanel={(val) => {
            setState((prev) => ({ ...prev, vehiclePanel: val }));
          }}
          setConfirmRidePanel={(val) => {
            setState((prev) => ({ ...prev, confirmRidePanel: val }));
          }}
        />
      </div>

      <div
        ref={(el) => (refs.current.confirmRidePanel = el)}
        className="fixed w-full z-10 bottom-0  bg-white px-4 py-8 rounded-t-xl
       translate-y-full "
      >
        <ConfirnRide
          setVehicleFound={(val) => {
            setState((prev) => ({ ...prev, vehicleFound: val }));
          }}
          setConfirmRidePanel={(val) => {
            setState((prev) => ({ ...prev, confirmRidePanel: val }));
          }}
          setVehiclePanel={(val) => {
            setState((prev) => ({ ...prev, vehiclePanel: val }));
          }}
        />
      </div>

      <div
        ref={(el) => (refs.current.vehicleFound = el)}
        className="fixed w-full z-10 bottom-0  bg-white px-4 py-8 rounded-t-xl
       translate-y-full "
      >
        <LookingForDriver
          setConfirmRidePanel={(val) => {
            setState((prev) => ({ ...prev, confirmRidePanel: val }));
          }}
        />
      </div>
    </div>
  );
};

export default Home;
