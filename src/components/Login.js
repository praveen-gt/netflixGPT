import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { USER_AVATAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignupForm, setIsSignupForm] = useState(false);
  const [message, setMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleformSubmit = (e) => {
    e.preventDefault();


    //validate the formdata
    const errMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    setMessage(errMessage);

    if (errMessage) return;

    // signin/signup logic
    if (isSignupForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              name.current.value = null;
              email.current.value = null;
              password.current.value = null;
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          name.current.value = '';
          email.current.value = '';
          password.current.value = '';
          // Signed in
          // const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="relative w-[100%] h-[100%] z-1">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg" />
        <div className="absolute w-[100%] bg-[#00000061] h-[100%] top-0 left-0"></div>
        <div className="absolute top-0 bottom-0 m-auto left-0 right-0 flex items-center justify-center">
          <form
            onSubmit={handleformSubmit}
            className="w-1/4 flex flex-col bg-[#000000a1] p-14"
          >
            <h2 className="text-white font-bold text-4xl mb-4">
              {isSignupForm ? "Sign Up" : "Sign In"}
            </h2>
            {isSignupForm && (
              <div className="mb-4">
                <input
                  type="text"
                  ref={name}
                  placeholder="Full Name"
                  className="p-2 w-full"
                />
              </div>
            )}
            <div className="mb-4">
              <input
                type="text"
                ref={email}
                placeholder="Email or Mobile number"
                className="p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                ref={password}
                placeholder="Password"
                className="p-2 w-full"
              />
            </div>
            {message && <p className="text-[red] mb-4 font-bold">{message}</p>}
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-red-700 text-white rounded-md"
              >
                {isSignupForm ? "Sign Up" : "Sign In"}
              </button>
            </div>
            {!isSignupForm && <p className="text-white text-center my-3">OR</p>}
            {!isSignupForm && (
              <div>
                <button
                  type="submit"
                  className="w-full p-2 bg-[#80808066] text-white rounded-md mb-2"
                >
                  Use a sign-in code
                </button>
              </div>
            )}
            {!isSignupForm && (
              <p className="text-white text-center">
                <Link to={"#"} className="font-medium">
                  Forgot Password?
                </Link>
              </p>
            )}
            <p className="text-white my-3">
              {isSignupForm ? "Already Have Account ? " : "New to Netflix ? "}{" "}
              <Link
                onClick={() => setIsSignupForm(!isSignupForm)}
                className="font-medium"
              >
                {isSignupForm ? "Sign In" : "Sign Up Now"}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
