import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { TOGGLE_GPT_SEARCH } from "../utils/searchSlice";
import { CHANGE_LANGUAGE } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearchPage = useSelector((state) => state.search.showSearchPage);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
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

  const handleGPTSearchCLick = () => {
    dispatch(TOGGLE_GPT_SEARCH());
  };

  const handleLanguageChange = (e) => {
    dispatch(CHANGE_LANGUAGE(e.target.value));
  };

  return (
    <div className="absolute bg-tranparent top-0 left-0 z-10 flex justify-between w-screen items-center">
      <img src="/logo.png" width={200} height={100} alt="Netflix logo" />

      {user && (
        <div className="flex items-center gap-6 mr-12">
          {gptSearchPage && (
            <select
              className="p-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-6 py-2 bg-purple-900 text-white rounded"
            onClick={handleGPTSearchCLick}
          >
            {gptSearchPage ? "Homepage" : "GPT Search" }
          </button>
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
