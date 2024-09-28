import React from "react";
import { Login } from "@/components/major";
import "../globals.css";
import { ErrorBoundaries } from "@/components";

export default function LoginPage() {
  return (
    <>
    <ErrorBoundaries>
      <Login />
    </ErrorBoundaries>
    </>
  );
}
