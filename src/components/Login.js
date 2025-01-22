import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [inFocus, setInFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [value, setValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [fullNameValue, setFullNameValue] = useState("");

  const [signInOrSignUpBtn, setSignInOrSignUpBtn] = useState(true);
  //Email or mobile Number
  const getValue = (e) => {
    setValue(e.target.value);
  };

  const handleFocusIn = () => {
    setInFocus(true);
  };

  const handleFocusOut = () => {
    if (value === "") {
      setInFocus(false);
    }
  };

  //Password form
  const getPasswordValue = (e) => {
    // console.log(e);
    setPasswordValue(e.target.value);
  };

  const handlePasswordFocusIn = () => {
    setPasswordFocus(true);
  };

  const handlePasswordFocusOut = () => {
    if (passwordValue === "") {
      setPasswordFocus(false);
    }
  };

  const toggleButton = () => {
    setSignInOrSignUpBtn(!signInOrSignUpBtn);
  };
  //full Name focus
  const getFullName = (e) => {
    setFullNameValue(e.target.value);
  };
  const handlefullNameFocusIn = () => {
    setFullNameFocus(true);
  };

  const handlefullNameFocusOut = () => {
    if (fullNameValue === "") {
      setFullNameFocus(false);
    }
  };

  // console.log(passwordValue);
  return (
    <div className="bg-black h-screen overflow-hidden relative z-0">
      <Header />
      <div className="absolute h-screen -z-10 w-full opacity-50">
        <img src="/images/netflixbg.jpg" alt="bgImg" />
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="pl-20 pr-20 pt-10 pb-5 h-3/4 bg-black bg-opacity-60 rounded-md">
          <form className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-4xl mb-5">
              {signInOrSignUpBtn ? "Sign In" : "Sign Up"}
            </h1>
            {signInOrSignUpBtn ? (
              <></>
            ) : (
              <div className="border-solid border border-gray-500 rounded-sm mb-5">
                <div
                  className={
                    fullNameFocus
                      ? "outline outline-white outline-offset-4 w-72 outline-2 box-border pl-2 rounded-sm"
                      : ""
                  }
                  onFocus={() => handlefullNameFocusIn()}
                >
                  <label
                    htmlFor="fullName"
                    className={
                      !fullNameFocus
                        ? "text-white text-[1rem] pl-2 relative top-4 z-20 font-sans transition-all duration-300"
                        : "text-white text-xs pl-1 relative top-0 transition-all duration-300"
                    }
                  >
                    Full Name
                  </label>
                  <div>
                    <input
                      id="fullName"
                      className="outline-none
                  text-sm text-white ml-2 w-64 h-7 -mt-3 mb-1 bg-transparent"
                      type="text"
                      value={fullNameValue}
                      onChange={(e) => getFullName(e)}
                      onBlur={() => handlefullNameFocusOut()}
                    />
                  </div>
                </div>
              </div>
            )}
            {/* emailOrMobileNum */}
            <div className="border-solid border border-gray-500 rounded-sm mb-5">
              <div
                className={
                  inFocus
                    ? "outline outline-white outline-offset-4 w-72 outline-2 box-border pl-2 rounded-sm"
                    : ""
                }
                onFocus={(e) => handleFocusIn(e)}
              >
                <label
                  htmlFor="emailOrMobileNum"
                  className={
                    !inFocus
                      ? "text-white text-[1rem] pl-2 relative top-4 z-20 font-sans transition-all duration-300"
                      : "text-white text-xs pl-1 relative top-0 transition-all duration-300"
                  }
                >
                  Email or mobile number
                </label>
                <div>
                  <input
                    id="emailOrMobileNum"
                    className="outline-none
                  text-sm text-white ml-2 w-64 h-7 -mt-3 mb-1 bg-transparent"
                    type="text"
                    value={value}
                    onChange={(e) => getValue(e)}
                    onBlur={() => handleFocusOut()}
                  />
                </div>
              </div>
            </div>
            {/* password */}
            <div className="border-solid border border-gray-500 rounded-sm mb-5">
              <div
                className={
                  passwordFocus
                    ? "outline outline-white outline-offset-4 w-72 outline-2 box-border pl-2 rounded-sm"
                    : ""
                }
                onFocus={() => handlePasswordFocusIn()}
              >
                <label
                  htmlFor="password"
                  className={
                    !passwordFocus
                      ? "text-white text-[1rem] pl-2 relative top-4 z-20 font-sans transition-all duration-300"
                      : "text-white text-xs pl-1 relative top-0 transition-all duration-300"
                  }
                >
                  Password
                </label>
                <div>
                  <input
                    id="password"
                    className="outline-none
                  text-sm text-white ml-2 w-64 h-7 -mt-3 mb-1 bg-transparent"
                    type="password"
                    value={passwordValue}
                    onChange={(e) => getPasswordValue(e)}
                    onBlur={() => handlePasswordFocusOut()}
                  />
                </div>
              </div>
            </div>
            {/* submit button */}
            <div>
              <button className="text-white bg-red-600 w-72 h-12 rounded-md font-semibold hover:bg-red-800  transition-all duration-200">
                {signInOrSignUpBtn ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <p
              className="text-white cursor-pointer"
              onClick={() => toggleButton()}
            >
              New to Netflix? Sign up now.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
