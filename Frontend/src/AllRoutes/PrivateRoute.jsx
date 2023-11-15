import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!isLogin) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Login To Continue!",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        return navigate("/");
      }
    });
  } else {
    return children;
  }
};
