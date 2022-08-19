import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Box, Button, Typography } from "@mui/material";
import { createUserAction, loginUserAction } from "../actions";
import Input from "./Input";
import signlogo from "../images/signlogo.png";

const Signup = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const [isSignup, setisSignup] = useState(true);
  const [isImg, setisImg] = useState(false);
  const UserInit = { name: "", email: "", password: "", confirmPassword: "" };
  const [userdata, setuserdata] = useState(UserInit);

  let formData = new FormData();
  const handleUserdata = async (e) => {
    e.preventDefault();
    formData.append("name", userdata.name);
    formData.append("email", userdata.email);
    formData.append("password", userdata.password);
    formData.append("confirmPassword", userdata.confirmPassword);
    isSignup
      ? dispatch(createUserAction(formData, navi))
      : dispatch(loginUserAction(userdata, navi));
  };
  const handleNext = (e) => {
    setisImg((prev) => !prev);
  };
  const handleAccounts = (e) => {
    setisSignup((prev) => !prev);
  };
  const oo = (e) => formData.append("pfimg", e.target.files[0]);
  const tt = (e) =>
    setuserdata({ ...userdata, [e.target.name]: e.target.value });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
      sx={{
        color: "black",
        borderBottom: "1px solid lightgray",
      }}
    >
      <img src={signlogo} style={{ width: "7%", margin: "2% 0%" }} />
      <Box
        display="flex"
        flexShrink={2}
        alignContent="space-between"
        flexDirection="column"
        p={2}
        mb={3}
        sx={{
          borderRadius: "9px",
          fontSize: "0.8rem",
          width: "16%",
          boxShadow: 2,
          border: "1px solid lightgray",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>
          {" "}
          {isSignup ? "Create account" : "login"}
        </Typography>
        {isSignup ? (
          <form encType="multipart/form-data" onSubmit={handleUserdata}>
            {isImg ? (
              <Box style={{ marginTop: "10%" }}>
                <lable style={{ marginLeft: "2%" }}>choose image</lable>
                <input
                  type="file"
                  name="pfimg"
                  style={{ margin: "3% 0px" }}
                  onChange={oo}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "lightyellow",
                    marginTop: "2rem",
                    width: "100%",
                    height: "1.8rem",
                    borderRadius: "23px",
                  }}
                >
                  create IMDB account
                </button>
              </Box>
            ) : (
              <>
                <Input
                  name="name"
                  lable="Name"
                  value={userdata.name}
                  onChg={tt}
                  type="text"
                />
                <Input
                  name="email"
                  lable="Email"
                  value={userdata.email}
                  onChg={tt}
                  type="email"
                />
                <Input
                  name="password"
                  lable="Password"
                  value={userdata.password}
                  onChg={tt}
                  type="password"
                />
                <Input
                  name="confirmPassword"
                  lable="Comfirm Password"
                  value={userdata.confirmPassword}
                  onChg={tt}
                  type="password"
                />
                <button
                  onClick={handleNext}
                  style={{
                    backgroundColor: "lightyellow",
                    marginTop: "1.4rem",
                    width: "100%",
                    height: "1.8rem",
                    borderRadius: "23px",
                  }}
                >
                  done
                </button>
              </>
            )}
          </form>
        ) : (
          <form onSubmit={handleUserdata}>
            {console.log(userdata)}
            <Input
              name="email"
              lable="Email"
              value={userdata.email}
              onChg={tt}
              type="email"
            />
            <Input
              name="password"
              lable="Password"
              value={userdata.password}
              onChg={tt}
              type="password"
            />
            <button
              type="submit"
              style={{
                backgroundColor: "lightyellow",
                marginTop: "1.4rem",
                width: "100%",
                height: "1.8rem",
                borderRadius: "23px",
              }}
            >
              login IMDB account
            </button>
          </form>
        )}
        <Box
          display="flex"
          pt={2}
          mt={5}
          alignItems="center"
          flexShrink={2}
          sx={{
            borderTop: "2px solid lightgray",
            boxShadow: "0 -5px 5px -5px #333",
            //background:
            //  "radial-gradient(150px 25px at 150px top,#666, transparent)",

            //background: "radial-gradient(closest-side at 60%, black)",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            {isSignup ? "Already have an account ?" : "Create new account ?"}
          </Typography>
          <Button
            variant="text"
            onClick={handleAccounts}
            sx={{ textTransform: "none", height: "1rem", fontSize: "0.6rem" }}
          >
            <p>{isSignup ? "sign-In" : "sign-up"}</p>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
