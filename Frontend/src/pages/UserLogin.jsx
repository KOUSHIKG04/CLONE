import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="p-8 h-screen flex flex-col justify-between font-poppins">
      <div>
        <img
          className="w-20 mb-14 mt-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />

        <form className="gap-2" onSubmit={submitHandler}>
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
          <h3 className="text-base font-medium mb-1">ENTER PASSWORD</h3>
          <Input
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="bg-[#eeeeeee2]"
          />
          <Button type="submit" className="w-full mt-5 mb-5 text-base">
            LOGIN
          </Button>
          <div className="text-center">
            DON'T HAVE AN ACCOUNT?&#160;
            
            <Link
              to="/signup"
              className="text-blue-600 font-medium underline cursor-pointer"
            >
              SIGNUP
            </Link>
          </div>
        </form>
      </div>

      <div>
        <Link to="/captain-login">
          <Button
            className="w-full mt-5 mb-5 text-base flex items-center justify-center gap-2
          bg-[#e16a33e2]"
          >
            LOGIN AS CAPTAIN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
