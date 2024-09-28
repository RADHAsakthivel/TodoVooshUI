"use client"

import React from "react";
import BaseError from "./baseError";

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error | null;
};

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error || null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const errorType = this.state.error?.message.includes("500")
        ? "500"
        : "400"; 
      return <BaseError Error={errorType} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;