import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "@/Context/CaptianContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/captain-login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setCaptain(res.data.captain);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/captain-login");
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

export default CaptainProtectedWrapper;
