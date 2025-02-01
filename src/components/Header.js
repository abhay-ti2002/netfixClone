import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { checkSignIn } = props;

  const [profileImage, setProfileImage] = useState("/images/userIcon.jpg");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign In
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component is unMount
    return () => unsubscribe(); //cleanUp function
  }, []); //eslint-disable-line

  const handleSignOut = () => {
    //check user is signout or not
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //profile Image logic
  const onFileChange = (e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
    // console.log(file);
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };
  // console.log(profileImage);
  return (
    <div
      className={
        checkSignIn
          ? "pl-32 absolute pt-4 w-screen "
          : "pl-32  pt-4 pr-4 w-full bg-gradient-to-b from-black z-50 fixed right-0 left-0"
      }
    >
      {checkSignIn ? (
        <h1 className="text-red-700  font-sans font-extrabold text-5xl">
          MOVIE HUB
        </h1>
      ) : (
        <div className="flex justify-between pr-20 ">
          <h1 className="text-red-700 font-sans font-extrabold text-4xl">
            MOVIE HUB
          </h1>
          <div className="flex gap-2">
            <label htmlFor="imageFile">
              <img className="w-8 h-8" src={profileImage} alt="icon" />
            </label>
            <div className="w-0">
              <input
                id="imageFile"
                type="file"
                className="text-xs w-8 hidden   -z-30 relative right-10"
                onChange={(e) => onFileChange(e)}
              />
            </div>
            <button onClick={handleSignOut} className="font-bold text-white">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
