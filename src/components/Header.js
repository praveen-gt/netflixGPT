import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL

          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe()
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User logout successful");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute bg-tranparent top-0 left-0 z-10 flex justify-between w-screen items-center">
      <img src="/logo.png" width={200} height={100} alt="Netflix logo" />

      {user && (
        <div className="flex items-center gap-6 mr-12">
          <div className="text-center flex flex-col items-center">
          <img
            src={user.photoURL}
            width={40}
            height={40}
            alt=""
            className="rounded"
          />
          <p className="font-medium mt-1 text-white">{user.displayName}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="px-6 py-2 bg-gray-200 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
