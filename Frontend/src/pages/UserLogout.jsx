import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No user is logged in!");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          localStorage.removeItem("token");

          navigate("/login");
        }
      } catch (error) {
        console.error("Logout failed:", error);
        toast.error("Failed to log out. Please try again.");
      }
    };

    logoutUser();
  }, [navigate]);

  return <div>{toast.success("Logout successful!")}</div>;
};

export default UserLogout;
