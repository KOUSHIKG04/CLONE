import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "@/Context/CaptianContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CaptainLogin = () => {
  
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
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

    const { email, password } = formData;

    const captain = {
      email,
      password,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captain
      );

      if (res.status === 201 || res.status === 200) {
        const { captain, token } = res.data;
        setCaptain(captain);
        localStorage.setItem("token", token);
        toast.success("Captain logged insuccessfully!");
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
  };

  return (
    <div className="p-8 h-screen flex flex-col justify-between font-poppins">
      <div>
        <img
          className="w-24 mb-6"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
              to="/captain-signup"
              className="text-blue-600 font-medium underline cursor-pointer"
            >
              SIGNUP
            </Link>
          </div>
        </form>
      </div>

      <div>
        <Link to="/login">
          <Button
            className="w-full mt-5 mb-5 text-base flex items-center justify-center gap-2
          bg-[#40a224e2]"
          >
            LOGIN AS USER
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

export default CaptainLogin;
