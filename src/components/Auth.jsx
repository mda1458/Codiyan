import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import firebase from "firebase/compat/app";


const Auth = () => {
  const [login, setLogin] = useState(true)

  const loginbyEmail = (e) => {
    e.preventDefault();
    const email = e.target.floating_email.value;
    const password = e.target.floating_password.value;


    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        toast.success("Welcome Back");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const loginbyGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        toast.success("Welcome Back");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const loginbyFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        toast.success("Welcome Back");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

    

  const signupbyEmail = (e) => {
    e.preventDefault();
    const email = e.target.floating_email.value;
    const password = e.target.floating_password.value;
    const name = e.target.floating_name.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            user.updateProfile({
                displayName: name,
            })
            .then(() => {
                toast.success("Registered Successfully");
            }
            )
            .catch((error) => {
                    toast.error(error.message);
                }
            );
        }
        )
        .catch((error) => {
                toast.error(error.message);
            }
        );
  };

  return (
    <section className="flex flex-col gap-4 justify-center items-center h-screen">
      {/* logo or name */}
      <div className="text-5xl font-bold bg-slate-900 text-white rounded-xl p-4">
        Codiyan
      </div>
      {login ? (
        <div className="flex flex-col gap-8 justify-between items-center w-[20rem] md:w-[30rem] sm:h-[80vh] bg-white my-4 rounded-lg p-4">
          <div className="text-3xl font-bold">Login</div>
          {/* Form */}
          <form
            onSubmit={loginbyEmail}
            className="flex flex-col justify-center items-center gap-4 w-[80%]"
          >
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <button
              type="submit"
              className="text-white transition-transform hover:scale-105 bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-purple-600 focus:ring-4 focus:outline-none font-medium rounded-xl text-md w-full sm:w-[33%] px-5 py-2.5 text-center"
            >
              Login
            </button>
          </form>
          <div className="or-spacer">
            <div className="mask"></div>
            <span>
              <i>or</i>
            </span>
          </div>
          {/* Sign in with other */}
          <div className="flex gap-16">
            {/* Google */}
            <FcGoogle
              onClick={loginbyGoogle}
              className="text-4xl cursor-pointer"
            />
            {/* Facebook */}
            <FaFacebook
              onClick={loginbyFacebook}
              className="text-4xl text-blue-700 cursor-pointer"
            />
          </div>
          {/* Signup link */}
          <div className="text-md text-slate-500 ">
            {"Don't"} have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer underline-offset-8 hover:underline"
              onClick={() => setLogin(false)}
            >
              Sign Up
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 justify-between items-center w-[20rem] md:w-[30rem] sm:h-[80vh] bg-white my-4 rounded-lg p-4">
          <div className="text-3xl font-bold">Sign Up</div>
          {/* Form */}
          <form
            onSubmit={signupbyEmail}
            className="flex flex-col justify-center items-center gap-4 w-[80%]"
          >
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <button
              type="submit"
              className="text-white transition-transform hover:scale-105 bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-purple-600 focus:ring-4 focus:outline-none font-medium rounded-xl text-md w-full sm:w-[33%]  px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
          </form>
          {/* Login link */}
          <div className="text-md text-slate-500 ">
            Already have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer underline-offset-8 hover:underline"
              onClick={() => setLogin(true)}
            >
              Login
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Auth