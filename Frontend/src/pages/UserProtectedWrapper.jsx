import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "@/Context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  
  if (loading) {
    return (
      <div
        className="w-10 h-10 border-4 border-t-blue-500
       border-gray-300 rounded-full animate-spin"
      ></div>
    );
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
