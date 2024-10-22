"use client"; // Mark this file as a Client Component

import { useEffect, useState } from "react";
import Loading from "@/components/Loading"; // Adjust the path according to your structure

const LoadingLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  // Simulate initial loading for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loading /> : <>{children}</>;
};

export default LoadingLayout;
