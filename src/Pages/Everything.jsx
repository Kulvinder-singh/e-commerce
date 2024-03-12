import React, { useEffect, useState } from "react";
import ProCard from "../component/Card";
import { useNavigate } from "react-router-dom";

const Everything = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <div className="d-flex flex-column  align-items-center m-4">
        <h1>Featured Products</h1>
        <div
          style={{
            backgroundColor: "blue",
            height: "2px",
            width: "90px",
          }}
        ></div>
      </div>
      <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
        <ProCard />
      </div>
    </>
  );
};

export default Everything;
