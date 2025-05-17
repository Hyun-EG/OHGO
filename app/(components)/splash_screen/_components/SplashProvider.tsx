"use client";

import { useEffect, useState } from "react";
import SplashScreen from "../SplashScreen";

export default function SplashProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("seenSplash");
    if (seen) {
      setShowSplash(false);
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem("seenSplash", "true");
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (showSplash) return <SplashScreen />;
  return <>{children}</>;
}
