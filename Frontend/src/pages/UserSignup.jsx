import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UserSignup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cfnpassword: "",
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
    const { password, cnfrPass } = formData;

    if (password.length < 8) {
      // setError("PASSWORD MUST BE AT LEAST 8 CHARACTERS");
      toast({
        variant: "destructive",
        title: "PASSWORD MUST BE AT LEAST 8 CHARACTERS",
      });
      return;
    }
    if (password.length < 8 && password !== cnfrPass) {
      toast({
        variant: "destructive",
        title: "PASSWORD SHOULD MATCH, TRY AGAIN",
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast({
        variant: "destructive",
        title: "PASSWORD MUST CONTAIN AT LEAST ONE CAPITAL LETTER",
      });
      return;
    }
    if (!/[0-9]/.test(password)) {
      toast({
        variant: "destructive",
        title: "PASSWORD MUST CONTAIN AT LEAST ONE NUMBER",
      });
      return;
    }
    if (!/[!@#$%^&*()<>?/\|}{~\-]/.test(password)) {
      toast({
        variant: "destructive",
        title: "PASSWORD MUST CONTAIN AT LEAST ONE SPECIAL CHARACTER",
      });
      return;
    }

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cfnpassword: "",
    });
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

          <Button type="submit" className="w-full mt-5 mb-5 text-base">
            SIGNUP
          </Button>
          <div className="text-center">
            ALREADY HAVE AN ACCOUNT?&#160;
            <Link
              to="/login"
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

export default UserSignup;
