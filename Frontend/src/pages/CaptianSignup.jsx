import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "@/Context/CaptianContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CaptianSignup = () => {

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cfnpassword: "",
    vehicleColor: "",
    vehiclePlate: "",
    vehicleCapacity: "",
    vehicleType: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const {
      password,
      cfnpassword,
      email,
      firstname,
      lastname,
      vehicleType,
      vehicleCapacity,
      vehicleColor,
      vehiclePlate,
    } = formData;

    if (password.length < 8) {
      toast.error("PASSWORD MUST BE AT LEAST 8 CHARACTERS");
      return;
    }
    if (password !== cfnpassword) {
      toast.error("PASSWORDS DO NOT MATCH");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("PASSWORD MUST CONTAIN AT LEAST ONE CAPITAL LETTER");
      return;
    }
    if (!/[0-9]/.test(password)) {
      toast.error("PASSWORD MUST CONTAIN AT LEAST ONE NUMBER");
      return;
    }
    if (!/[!@#$%^&*()<>?/\|}{~\-]/.test(password)) {
      toast.error("PASSWORD MUST CONTAIN AT LEAST ONE SPECIAL CHARACTER");
      return;
    }

    const newCaptain = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        newCaptain
      );
  
      if (res.status === 201 || res.status === 200) {
        const {captain, token} = res.data;
        setCaptain(captain);
        localStorage.setItem("token", token);
        toast.success("Captain signed up successfully!");
        navigate("/captain-home");
      }
    } catch (error) {
       if (error.response) {
         console.log("Error response:", error.response.data);
         toast.error(error.response.data.error || "Something went wrong!");
       } else if (error.request) {
         console.error("Error request:", error.request);
         toast.error("No response from server!");
       } else {
         console.error("Error message:", error.message);
         toast.error("An unexpected error occurred!");
       }
    }

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cfnpassword: "",
      vehicleColor: "",
      vehiclePlate: "",
      vehicleCapacity: "",
      vehicleType: "",
    });
  };

  return (
    <div className="p-8 h-screen flex flex-col justify-between font-poppins">
      <div>
        <img
          className="w-20 mb-6"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Logo"
        />

        <form className="gap-2" onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-1">ENTER YOUR NAME</h3>
          <div className="flex gap-4 ">
            <Input
              required
              type="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="FIRST NAME"
              className="mb-5 bg-[#eeeeeee2] w-1/2"
            />
            <Input
              required
              type="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="LAST NAME"
              className="mb-5 bg-[#eeeeeee2] w-1/2"
            />
          </div>

          <h3 className="text-base font-medium mb-1">ENTER YOUR EMAIL</h3>
          <Input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email@example.com"
            className="mb-5 bg-[#eeeeeee2]"
          />
          <div>
            <h3 className="text-base font-medium mb-1">ENTER UR PASSWORD</h3>
            <Input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="bg-[#eeeeeee2]"
            />
            <h3 className="text-base font-medium mb-1">RE-ENTER PASSWORD</h3>
            <Input
              required
              type="password"
              name="cfnpassword"
              value={formData.cfnpassword}
              onChange={handleInputChange}
              className="bg-[#eeeeeee2]"
            />
          </div>

          <h3 className="text-base font-medium mb-1">VEHICLE DETAILS</h3>
          <div className="flex gap-4">
            <Input
              required
              type="text"
              name="vehicleColor"
              value={formData.vehicleColor}
              onChange={handleInputChange}
              placeholder="VEHICLE COLOR"
              className="mb-5 bg-[#eeeeeee2] w-1/2 text-sm"
            />
            <Input
              required
              type="text"
              name="vehiclePlate"
              value={formData.vehiclePlate}
              onChange={handleInputChange}
              placeholder="VEHICLE PLATE"
              className="mb-5 bg-[#eeeeeee2] w-1/2 text-sm"
            />
          </div>
          <div className="flex gap-4">
            <Input
              required
              type="number"
              name="vehicleCapacity"
              value={formData.vehicleCapacity}
              onChange={handleInputChange}
              placeholder="VEHICLE CAPACITY"
              className="mb-5 bg-[#eeeeeee2] w-1/2 text-sm"
            />

            <Select
              required
              name="vehicleType"
              value={formData.vehicleType}
              onValueChange={(value) =>
                setFormData({ ...formData, vehicleType: value })
              }
              className="mb-5 bg-[#eeeeeee2] w-1/2 p-2"
            >
              <SelectTrigger className="w-1/2 text-sm bg-[#eeeeeee2] text-[#605e5e]">
                <SelectValue placeholder="VEHICLE TYPE" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="motorcycle">MOTORCYCLE</SelectItem>
                  <SelectItem value="car">CAR</SelectItem>
                  <SelectItem value="auto">AUTO</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full mt-5 mb-5 text-base">
            SIGNUP
          </Button>
          <div className="text-center">
            ALREADY HAVE AN ACCOUNT?&#160;
            <Link
              to="/captain-login"
              className="text-blue-600 font-medium underline cursor-pointer"
            >
              LOGIN
            </Link>
          </div>
        </form>
      </div>

      <div>
        <p className="text-[12px] leading-tight text-center">
          This site is protected by RECAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptianSignup;
