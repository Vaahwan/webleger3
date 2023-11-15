import React, { useState, useEffect } from "react";
import "./Login_signupPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/action";
import { getUser } from "../Redux/action";
import Swal from "sweetalert2";

export const Login_signupPage = () => {
  const [action, setAction] = useState("Sign Up");
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { login_res, signUp_res } = useSelector((store) => {
    return store;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValues({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleSignup = () => {
    setAction("Sign Up");
    dispatch(addUser(inputValues));
  };

  const handleLogin = () => {
    setAction("Login");
    dispatch(getUser(inputValues));
  };

  useEffect(() => {
    if (login_res.msg == "no user found") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No Registered User found, Please Register!",
        showConfirmButton: false,
        timer: 2000,
      });
      // setIsLoading(false);
    }
    if (login_res.msg == "invalid credentials") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Credentials!",
        showConfirmButton: false,
        timer: 2000,
      });
      // setIsLoading(false);
    }
    if (login_res.msg == "login successful") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      // setIsLoading(false);
      localStorage.setItem("token", login_res.token);
      localStorage.setItem("user_name", login_res.user.name);
      // navigate("/products");
    }

    // if (localStorage.getItem("user_name")) {
    //   navigate("/products");
    // }
  }, [login_res]);

  useEffect(() => {
    if (signUp_res.message == "User registered successfully") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Signed up successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setAction("Login");
    }
    if (signUp_res.message == "User already exist") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "User's email already exist",
        showConfirmButton: false,
        timer: 2000,
      });
      // setIsLoading(false);
    }
  }, [signUp_res]);

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <span class="material-symbols-outlined">person</span>
            <input
              type="text"
              placeholder="Enter Name"
              required
              name="name"
              value={inputValues.name}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="input">
          <span class="material-symbols-outlined">mail</span>
          <input
            type="email"
            placeholder="Enter Email"
            required
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <span class="material-symbols-outlined">lock</span>
          <input
            type="password"
            placeholder="Enter Password"
            required
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
          />
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>click here!</span>
          </div>
        )}

        <div className="submit-container">
          <button
            type="submit"
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={handleSignup}
          >
            Sign Up
          </button>
          <button
            type="submit"
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
