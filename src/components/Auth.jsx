import { useState } from "react";


const Auth = () => {
  const [login, setLogin] = useState(true)
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      {/* logo or name */}
      <div className="text-5xl font-bold bg-slate-900 text-white rounded-xl p-4">
        Codiyan
      </div>
      {/* Navigator between Login and Signup */}
      <div className="flex justify-center items-center gap-4 my-4">
        <div
          className={`text-xl font-medium cursor-pointer ${
            login ? "text-slate-900" : "text-slate-500"
          }`}
          onClick={() => setLogin(true)}
        >
          Login
        </div>
        <div
          className={`text-xl font-medium cursor-pointer ${
            login ? "text-slate-500" : "text-slate-900"
          }`}
          onClick={() => setLogin(false)}
        >
          Signup
        </div>
      </div>
      {
        login ? (
      <div className="flex flex-col gap-8 justify-center items-center w-[33%] h-[70vh] bg-white my-4 rounded-lg">
        <div className="text-3xl font-bold">Login</div>
        {/* Form */}
        <form className="flex flex-col justify-center items-center gap-4 w-[80%]">
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
            className="text-white transition-transform hover:scale-105 bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-purple-600 focus:ring-4 focus:outline-none font-medium rounded-xl text-md w-[33%] px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
        {/* Signup link */}
        <div className="text-md text-slate-500 ">
          {"Don't"} have an account?{" "}
          <span
            className="text-purple-600 cursor-pointer underline-offset-8 hover:underline"
            onClick={() => setLogin(false)}
          >
            Signup
          </span>
        </div>
      </div>
        ) : (
      <div className="flex flex-col gap-8 justify-center items-center w-[33%] h-[70vh] bg-white my-4 rounded-lg">
        <div className="text-3xl font-bold">Signup</div>
        {/* Form */}
        <form className="flex flex-col justify-center items-center gap-4 w-[80%]">
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
            className="text-white transition-transform hover:scale-105 bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-purple-600 focus:ring-4 focus:outline-none font-medium rounded-xl text-md w-[33%] px-5 py-2.5 text-center"
          >
            Signup
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