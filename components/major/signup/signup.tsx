"use client";
import React, { useState } from "react";
import { Button } from "../../shared/button";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { createUser } from "@/services/signup";
import { useRouter } from "next/navigation";
import { setToken } from "@/helper/cookies";
import { ClipLoader } from "react-spinners";
import { Input } from "@/components/shared";

function SignUP() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const setFormDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const { data, status } = await createUser(formData);
      if (status === 201) {
        setToken(data.data.token);
        router.push("/dashboard");
      }
      if (status == 409) setError("User Already exist");
    } catch (err) {
      console.error("Error =>", err);
      setError("Failed to log in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="w-full max-w-md  ">
          <h2 className="text-2xl font-bold text-blue-600">Signup</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border-2 border-bgPrimary">
            <form className="space-y-4">
              <div>
                <Input
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  onChange={setFormDataHandler}
                  required
                  placeHolder="First Name"
                />
              </div>
              <div>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={setFormDataHandler}
                  required
                  placeHolder="Last Name"
                />
              </div>
              <div>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  onChange={setFormDataHandler}
                  required
                  placeHolder="Email"
                />
              </div>
              <div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={setFormDataHandler}
                  required
                  placeHolder="Password"
                />
              </div>
              <div>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={setFormDataHandler}
                  required
                  placeHolder="confirmPassword"
                />
              </div>
              <Button
                cssClass="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={submitHandler}
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
                  "Signup"
                )}
              </Button>
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
            </form>
            <div className="flex items-center justify-center mt-4">
              <span className="text-sm text-gray-600">
                <b>Already have a account?</b>
              </span>
              <Link
                href="/login"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                <b className="ml-[5px]">Login</b>
              </Link>
            </div>
            <Button cssClass="flex items-center justify-center w-full px-4 py-2 mt-6 text-blue-600 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaGoogle className="mr-2" />
              signup with Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUP;
