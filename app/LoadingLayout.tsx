"use client"; // Mark this file as a Client Component

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

// import Loading from "@/components/Loading"; // Adjust the path according to your structure

const LoadingLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  // Simulate initial loading for demonstration purposes
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loading /> : <>{children}</>;
};

export default LoadingLayout;
