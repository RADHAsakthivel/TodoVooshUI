"use client";
import React, { useState } from "react";
import { Button, Input } from "../../shared";
import { FaGoogle } from "react-icons/fa";
import { login } from "@/services";
import { ClipLoader } from "react-spinners";
import clsx from "clsx";
import { setToken } from "@/helper/cookies";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setFormHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await login(formData);
      if(res.status === 200) {
        setToken(res.data.data.token);
        router.push('/dashboard'); 
      };
      if(res.status === 404){
        setError("User not found please sign up")
      }
    } catch (err) {
      console.error("Error =>", err);
      setError("Failed to log in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600">Login</h2>
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border-2 border-bgPrimary">
          <form className="space-y-4" onSubmit={submitHandler}>
            <div>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeHolder="Email"
                onChange={setFormHandler}
              />
            </div>
            <div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeHolder="Password"
                onChange={setFormHandler}
              />
            </div>
            <Button
              cssClass={clsx(
                "w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700",
                isLoading && "!bg-bgPrimary"
              )}
            >
              {isLoading ? (
                <ClipLoader
                  color={"white"}
                  loading={isLoading}
                  size={15}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Login"
              )}
            </Button>
          </form>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
          <div className="flex items-center justify-center mt-4">
            <span className="text-sm text-gray-600">
              <b>Do not have an account?</b>
            </span>
            <a
              href="/signup"
              className="text-sm font-medium text-blue-600 hover:underline ml-[5px]"
            >
              <b>Signup</b>
            </a>
          </div>
          <Button cssClass="flex items-center justify-center w-full px-4 py-2 mt-6 text-blue-600 border border-gray-300 rounded-md hover:bg-gray-50">
            <FaGoogle className="mr-2" />
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
