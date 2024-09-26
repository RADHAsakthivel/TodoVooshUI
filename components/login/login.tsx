import React from "react";
import { Button } from "../button";
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="w-full max-w-md  ">
          <h2 className="text-2xl font-bold text-blue-600">Login</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border-2 border-bgPrimary">
            <form className="space-y-4">
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Login
              </button>
            </form>
            <div className="flex items-center justify-center mt-4">
              <span className="text-sm text-gray-600">
                <b>Don't have a account?</b>
              </span>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                <b className="ml-[5px]">signup</b>
              </a>
            </div>
            <Button cssClass="flex items-center justify-center w-full px-4 py-2 mt-6 text-blue-600 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaGoogle className="mr-2" />
              Login with Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
